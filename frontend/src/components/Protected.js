// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { useEffect, useState } from "react";
import { practitionerByEmailAndName } from '../graphql/queries';
import { API, Amplify, graphqlOperation } from 'aws-amplify';

export function Protected() {
  const { route } = useAuthenticator((context) => [context.route]);
  const { user } = useAuthenticator((context) => [context.user]);

  const [practitioner, setPractitioner] = useState([]);

  useEffect(() => {
    fetchPractitioner();
  }, []);

  async function fetchPractitioner() {
    try {
      const practitionerParams = {
        email: user.attributes.email
      };
  
      // const response = await API.graphql({
      //   query: practitionerByEmailAndName,
      //   variables: {
      //     input: practitionerParams
      //   }
      // });
      const response = await API.graphql(
        graphqlOperation(practitionerByEmailAndName, practitionerParams)
      );
      setPractitioner(response.data.practitionerByEmailAndName.items[0]);
    } 
    catch (error) {
      console.log(error)
    }
  }  

  const message =
    route === 'authenticated' ? 'Practitioner Details' : 'Loading...';
  return (
    <>
      <Heading level={1}>{message}</Heading>
      {/* {practitioner.patientsAssigned.items.map((patient) => (
        <div style={{ border: '1px solid black', padding: 10, borderRadius: 10}}>
        <h3>{patient.name}</h3>
        <p>{patient.birthDate}</p>
        <p>{patient.address}</p>
        </div>
      ))} */}
        <div>
          <p>{ "Name: " + practitioner.name }</p>
          <p>{ "Identifier: " + practitioner.identifier }</p>
          <p>{ "Gender: " + practitioner.gender }</p>
          <p>{ "Organization: " + practitioner.organization }</p>
          <p>{ "Specialty: " + practitioner.specialtyCode + " - " + practitioner.specialty }</p>
          <p>{ "Home Address: " + practitioner.address }</p>
        </div>
    </>
  );
}