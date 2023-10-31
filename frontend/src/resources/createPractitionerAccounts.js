import * as fs from 'fs';
import awsAppSyncConfig from '../aws-exports.js'
import { Amplify, API, graphqlOperation } from 'aws-amplify';
Amplify.configure(awsAppSyncConfig);

function readPractitionerFile(filename) {
  let practitionerList = [];
  try {
    const data = JSON.parse(fs.readFileSync(filename).toString());
    const entry = data['entry']

    const dataLength = Object.keys(entry).length
    let practitionerData = {};
    for(let i = 0; i < dataLength; i++){
      let resource = entry[i]['resource']
      if (resource['resourceType'] === 'Practitioner') {
        practitionerData = {
          "id": resource['id'],
          "identifier": resource['identifier'][0]['value'],
          "name": resource['name'][0]['prefix'][0] + " " + resource['name'][0]['given'][0] + " " + resource['name'][0]['family'],
          "address": resource['address'][0]['line'][0] + ", " + resource['address'][0]['city'] + ", " + resource['address'][0]['state'] + ", " + resource['address'][0]['postalCode'] + ", " + resource['address'][0]['country'],
          "email": "away3034+" + resource['telecom'][0]['value'].replace("example.com", "gmail.com"),
          "gender": resource['gender']
        }
      }
      else if (resource['resourceType'] === 'PractitionerRole') {
        practitionerData['organization'] = resource['organization']['display']
        practitionerData['organizationIdentifier'] = resource['organization']['identifier']['value']
        practitionerData['specialty'] = resource['specialty'][0]['coding'][0]['display']
        practitionerData['specialtyCode'] = resource['specialty'][0]['coding'][0]['code']

        practitionerList.push(practitionerData);
        practitionerData = {};
      }
      
    }
    return practitionerList;
    
  }
  catch(error) {
    console.log(error);
  }
}

console.log(readPractitionerFile('resources/practitionerInformation1692631321245.json'))