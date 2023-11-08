import * as fs from 'fs';
import * as path from 'path';
import { getPractitioner } from '../graphql/queries.js';
import { createPatient, updatePatient, createPractitioner, updatePractitioner, createPatientsPractitioners, updatePatientsPractitioners } from '../graphql/mutations.js';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../aws-exports.js';
Amplify.configure(awsmobile);

const practitionerList = readPractitionerFile("resources/practitionerInformation1692631321245.json");

function readPractitionerFile(filename) {
  let practitionerList = {};
  try {
    const data = JSON.parse(fs.readFileSync(filename).toString());
    const entry = data['entry'];

    const dataLength = Object.keys(entry).length;
    let identifier = "";
    for(let i = 0; i < dataLength; i++){
      let resource = entry[i]['resource'];
      if (resource['resourceType'] === 'Practitioner') {
        identifier = resource['identifier'][0]['value']
        practitionerList[identifier] = {
          "id": resource['id'],
          "identifier": identifier,
          "name": resource['name'][0]['prefix'][0] + " " + resource['name'][0]['given'][0] + " " + resource['name'][0]['family'],
          "address": resource['address'][0]['line'][0] + ", " + resource['address'][0]['city'] + ", " + resource['address'][0]['state'] + ", " + resource['address'][0]['postalCode'] + ", " + resource['address'][0]['country'],
          "email": "away3034+" + resource['telecom'][0]['value'].replace("example.com", "gmail.com"),
          "gender": resource['gender']
        }
      }
      else if (resource['resourceType'] === 'PractitionerRole') {
        practitionerList[identifier]['organization'] = resource['organization']['display'];
        practitionerList[identifier]['organizationIdentifier'] = resource['organization']['identifier']['value'];
        practitionerList[identifier]['specialty'] = resource['specialty'][0]['coding'][0]['display'];
        practitionerList[identifier]['specialtyCode'] = resource['specialty'][0]['coding'][0]['code'];
        //practitionerList.push(practitionerData);
        //practitionerData = {};
      }
    }
    //console.log(practitionerList)
    return practitionerList;

  }
  catch(error) {
    console.log(error);
  }
}

function readPatientFile(filename) {
  try {
    const data = JSON.parse(fs.readFileSync(filename).toString());
    const entry = data['entry'];
    let personalDetails = entry[0]['resource'];

    const cholesterolCode = "2093-3";
    const bloodPressureCode = "85354-9";
    const bodyHeightCode = "8302-2";
    const bodyWeightCode = "29463-7";
    const BMICode = "39156-5";
    const heartRateCode = "8867-4";
    const respiratoryRateCode = "9279-1";
    
    if (personalDetails['name'][0]['given'][1] === undefined) {
      personalDetails['name'][0]['given'][1] = "";
    }
    else {
      personalDetails['name'][0]['given'][1] += " ";
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
    }

    const dataLength = Object.keys(entry).length;
    let cholesterolCodeCounter = 1;
    let bloodPressureCodeCounter = 1;
    let heartRateCodeCounter = 1;
    let respiratoryRateCodeCounter = 1;
    let practitionerIdentifiers = new Set();

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

          cholesterolCodeCounter += 1;
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

          heartRateCodeCounter += 1;
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

          respiratoryRateCodeCounter += 1;
        }
      }
      else if(item['resourceType'] === "Encounter"){
        const identifierStr = item['participant'][0]['individual']['reference'].replace("Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|", "")

        if(identifierStr === practitionerList[identifierStr]['identifier']) {
          practitionerIdentifiers.add(identifierStr);
          //patientData['practitionersAssigned'] = new Set();
          //patientData['practitionersAssigned'].add(practitionerList[identifierStr])
        }
        //patientData['practitioner'][identifierStr] = practitionerName;
        // for(let j = 0; j < practitionerList['data']['listPractitioners']['items'].length; j++) {
        //   if(identifierStr === practitionerList['data']['listPractitioners']['items'][j]['identifier']) {
        //     patientData['practitioner'].add(practitionerList['data']['listPractitioners']['items'][j])
        //   }
        // }
        // if(!practitionerIdentifiers.includes(identifierStr)) {
        //   //console.log(idStr)
        //   // try {
        //   //   practitionerIdentifiers.push(identifierStr);
        //   //   const practitioner = getSinglePractitioner(identifierStr);
        //   //   console.log(practitioner)
        //   //   patientData['practitioner'].push(practitioner);
        //   // } 
        //   // catch(error) {
        //   //   console.log(error);
        //   // }
        //   practitionerIdentifiers.push(identifierStr);
        //   const practitioner = await getSinglePractitioner(idStr);
        //   //console.log(practitioner['data']['getPractitioner']);
        //   patientData['practitioner'].push(practitioner);
        // }
      }
    }
    //patientData['practitionersAssigned'] = Array.from(patientData['practitionersAssigned']);
    practitionerIdentifiers = Array.from(practitionerIdentifiers);

    return [patientData, practitionerIdentifiers];
  }
  catch(error) {
    console.log(error);
  }
}

async function createBulkPractitioners() {
  for (const [key, value] of Object.entries(practitionerList)) {
    //console.log(value);

    try {
      //await API.graphql(graphqlOperation(createPatient, patientData))
      await API.graphql({
        query: createPractitioner,
        variables: {
          input: value
        }
      })
      console.log('Practitioner ' + value['name'] + ' successfully created!') 
    }
    catch (err) {
      console.log('Something went wrong', err)
    }
  }
}

async function updateBulkPractitioners() {
  const folder = 'resources/patients'
  for (const [key, value] of Object.entries(practitionerList)) {
    value['patientsAssigned'] = [];
  }

  // console.log(practitionerList)

  fs.readdir(folder, async (err, files) => {
    files.forEach(async file => {
      const patientDataAndPracIdentifiers = readPatientFile(folder + '/' + file)

      patientDataAndPracIdentifiers[1].forEach(identifier => {
        console.log(identifier)
        delete patientDataAndPracIdentifiers[0]['practitionersAssigned']
        practitionerList[identifier]['patientsAssigned'].push(patientDataAndPracIdentifiers[0])
      })
      
    })

    for (const [key, value] of Object.entries(practitionerList)) {
      try {
        //await API.graphql(graphqlOperation(createPatient, patientData))
        await API.graphql({
          query: updatePractitioner,
          variables: {
            input: value
          }
        })
        console.log('Practitioner ' + value['name'] + ' successfully updated!') 
      }
      catch (err) {
        console.log('Something went wrong', err)
      }
    }
  })
}

async function getSinglePractitioner(idStr) {
  try {
    const practitioner = await API.graphql({
      query: getPractitioner,
      variables: { id: idStr }
    });
    return practitioner;
  } 
  catch (error) {
    console.log(error);
  }
}

async function createBulkPatients() {
  const folder = "resources/patients";

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

async function updateBulkPatientsPractitioners() {
  const folder = 'resources/patients'

  fs.readdir(folder, (err, files) => {
    files.forEach(async file => {
      try {
        const patientDataAndPracIdentifiers = readPatientFile(folder + '/' + file)
        const patientResult = await API.graphql({
          query: updatePatient,
          variables: {
            input: patientDataAndPracIdentifiers[0]
          }
        })
        const patient = patientResult.data.updatePatient;

        patientDataAndPracIdentifiers[1].forEach(async identifier => {
          try {
            console.log(identifier)
            const practitionerResult = await API.graphql({
              query: updatePractitioner,
              variables: {
                input: practitionerList[identifier]
              }
            })
            const practitioner = practitionerResult.data.updatePractitioner;

            // Connect patients and practitioners
            const patientPractitionerParams = {
              patientId: patient.id,
              practitionerId: practitioner.id,
            };

            await API.graphql({
              query: createPatientsPractitioners,
              variables: {
                input: patientPractitionerParams
              }
            })

            console.log("Practitioner " + practitionerList[identifier]['name'] + " successfully updated with patient ID " + patient.id + " assigned")
          } 
          catch (error) {
            console.log('Something went wrong', error)
          }
      })
      console.log("Patient " + patientDataAndPracIdentifiers[0]['name'] + " successfully updated")
    }
    catch (error) {
      console.log('Something went wrong', error)
    }

    })
  })
}

//createPatientData('resources/patients', 'Abbey_Regenia_Nienow_ac579324-f14c-423c-ceeb-1102a6c6f72e.json')
//updatePatientData('resources/patients', 'Abbey_Regenia_Nienow_ac579324-f14c-423c-ceeb-1102a6c6f72e.json')
//readPatientFile('resources/patients/Abbey_Regenia_Nienow_ac579324-f14c-423c-ceeb-1102a6c6f72e.json')
//console.log(readPatientFile('resources/patients/Ardelle_Mitsuko_Roob_4d141508-2857-8f26-fef5-d9da0a7664ee.json'))
//readPatientFile('resources/patients/Ardelle_Mitsuko_Roob_4d141508-2857-8f26-fef5-d9da0a7664ee.json')
//console.log(practitionerList['9999954198'])
//createBulkPatients();
//createBulkPractitioners();
//updateBulkPatients();
//updateBulkPractitioners();
// const folder = 'resources/patients'

// fs.readdir(folder, (err, files) => {
//   files.forEach(async file => {
//     readPatientFile(folder + '/' + file)
//   })
// })

// console.log(practitionerList)
updateBulkPatientsPractitioners();