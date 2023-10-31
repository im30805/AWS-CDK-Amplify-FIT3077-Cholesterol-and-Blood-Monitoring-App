import * as fs from 'fs';
import { createPatient, updatePatient } from '../graphql/mutations.js';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsAppSyncConfig from '../aws-exports.js'
Amplify.configure(awsAppSyncConfig);

function readPatientFile(filename) {
  try {
    const data = JSON.parse(fs.readFileSync(filename).toString());
    const entry = data['entry']
    let personalDetails = entry[0]['resource']
    const encounterDetails = entry[1]['resource']

    const cholesterolCode = "2093-3"
    const bloodPressureCode = "85354-9"
    const bodyHeightCode = "8302-2"
    const bodyWeightCode = "29463-7"
    const BMICode = "39156-5"
    const heartRateCode = "8867-4"
    const respiratoryRateCode = "9279-1"
    
    if (personalDetails['name'][0]['given'][1] === undefined) {
      personalDetails['name'][0]['given'][1] = "";
    }
    else {
      personalDetails['name'][0]['given'][1] += " "
    }

    const patientData = {
      "id": personalDetails['identifier'][0]['value'],
      "name": personalDetails['name'][0]['given'][0] + " " + personalDetails['name'][0]['given'][1] + personalDetails['name'][0]['family'],
      "gender": personalDetails['gender'],
      "birthDate": personalDetails['birthDate'],
      "deceasedDateTime": personalDetails['deceasedDateTime'],
      "address": personalDetails['address'][0]['line'][0] + ", " + personalDetails['address'][0]['city'] + ", " + personalDetails['address'][0]['state'] + ", " + personalDetails['address'][0]['postalCode'] + ", " + personalDetails['address'][0]['country'],
      "height": {},
      "weight": {},
      "BMI": {},
      "cholesterolRecord": [],
      "bloodPressureRecord": [],
      "heartRateRecord": [],
      "respiratoryRateRecord": [],
      "practitionerIdentifier": encounterDetails['participant'][0]['individual']['reference'].replace("Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|", ""),
      "practitioner": encounterDetails['participant'][0]['individual']['display']
    }

    const dataLength = Object.keys(entry).length
    let cholesterolCodeCounter = 1
    let bloodPressureCodeCounter = 1
    let heartRateCodeCounter = 1
    let respiratoryRateCodeCounter = 1

    for(let i = 2; i < dataLength; i++){
      const entry = data['entry']
      const item = entry[i]['resource']
      
      if(item['resourceType'] === "Observation"){
        if(item['code']['coding'][0]['code'] === cholesterolCode){
          const value = item['valueQuantity']['value']
          const issued = item['issued']
          const unit = item['valueQuantity']['unit']
  
          patientData['cholesterolRecord'].push({
            "recordNumber": cholesterolCodeCounter,
            "valueQuantity": value,
            "unit": unit,
            "issued": issued
          })

          cholesterolCodeCounter += 1
        }
        else if(item['code']['coding'][0]['code'] === bloodPressureCode){
          const component = item['component']
          const valueDiastolic = component[0]['valueQuantity']['value']
          const valueSystolic = component[1]['valueQuantity']['value']
          const issued = item['issued']
          const unitDiastolic = component[0]['valueQuantity']['unit']
          const unitSystolic = component[1]['valueQuantity']['unit']

          patientData['bloodPressureRecord'].push({
            "recordNumber": bloodPressureCodeCounter,
            "valueQuantityDiastolic": valueDiastolic,
            "valueQuantitySystolic": valueSystolic,
            "unitDiastolic": unitDiastolic,
            "unitSystolic": unitSystolic,
            "issued": issued
          })

          bloodPressureCodeCounter += 1
        }
        else if(item['code']['coding'][0]['code'] === bodyHeightCode) {
          const value = item['valueQuantity']['value']
          const unit = item['valueQuantity']['unit']

          patientData['height'] = {
            "valueQuantity": value,
            "unit": unit
          }
        }
        else if(item['code']['coding'][0]['code'] === bodyWeightCode) {
          const value = item['valueQuantity']['value']
          const unit = item['valueQuantity']['unit']

          patientData['weight'] = {
            "valueQuantity": value,
            "unit": unit
          }
        }
        else if(item['code']['coding'][0]['code'] === BMICode) {
          const value = item['valueQuantity']['value']
          const unit = item['valueQuantity']['unit']

          patientData['BMI'] = {
            "valueQuantity": value,
            "unit": unit
          }
        }
        else if(item['code']['coding'][0]['code'] === heartRateCode) {
          const value = item['valueQuantity']['value']
          const issued = item['issued']
          const unit = item['valueQuantity']['unit']

          patientData['heartRateRecord'].push({
            "recordNumber": heartRateCodeCounter,
            "valueQuantity": value,
            "unit": unit,
            "issued": issued
          })

          heartRateCodeCounter += 1
        }
        else if(item['code']['coding'][0]['code'] === respiratoryRateCode) {
          const value = item['valueQuantity']['value']
          const issued = item['issued']
          const unit = item['valueQuantity']['unit']

          patientData['respiratoryRateRecord'].push({
            "recordNumber": respiratoryRateCodeCounter,
            "valueQuantity": value,
            "unit": unit,
            "issued": issued
          })

          respiratoryRateCodeCounter += 1
        }
      }
    }
    //console.log(patientData)
    return patientData;
  }
  catch(error) {
    console.log(error);
  }
}

async function createBulkPatients() {
  const folder = 'resources/patients'

  fs.readdir(folder, (err, files) => {
    files.forEach(async file => {
      createPatientData(folder, file)
    })
  })
}

async function updateBulkPatients() {
  const folder = 'resources/patients'

  fs.readdir(folder, (err, files) => {
    files.forEach(async file => {
      updatePatientData(folder, file)
    })
  })
}

async function createPatientData(folder, file) {
  const patientData = readPatientFile(folder + '/' + file)
  try {
    //await API.graphql(graphqlOperation(createPatient, patientData))
    await API.graphql({
      query: createPatient,
      variables: {
        input: patientData
      }
    })
    console.log('Patient ' + patientData['name'] + ' successfully created!') 
  }
  catch (err) {
    console.log('Something went wrong', err)
  }
}

async function updatePatientData(folder, file) {
  const patientData = readPatientFile(folder + '/' + file)
  try {
    await API.graphql({
      query: updatePatient,
      variables: {
        input: patientData
      }
    })
    console.log('Patient ' + patientData['name'] + ' successfully updated!') 
  }
  catch (err) {
    console.log('Something went wrong', err)
  }
}

//createBulkPatients();
updateBulkPatients();
//createPatientData('resources/patients', 'Abbey_Regenia_Nienow_ac579324-f14c-423c-ceeb-1102a6c6f72e.json')
//updatePatientData('resources/patients', 'Abbey_Regenia_Nienow_ac579324-f14c-423c-ceeb-1102a6c6f72e.json')
//readPatientFile('resources/patients/Abbey_Regenia_Nienow_ac579324-f14c-423c-ceeb-1102a6c6f72e.json')
