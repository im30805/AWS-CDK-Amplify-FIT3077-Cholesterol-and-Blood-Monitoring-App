// components/ProtectSecond.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import { useEffect, useState } from "react";
import { practitionerByEmailAndName, patientsPractitionersByPractitionerId } from '../graphql/queries';
import { API, Amplify, graphqlOperation } from 'aws-amplify';

export function ProtectedSecond(props) {
  const { route } = useAuthenticator((context) => [context.route]);
  const { user } = useAuthenticator((context) => [context.user]);

  const [practitioner, setPractitioner] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPractitioner();
    fetchPatients(practitioner.id);
  }, [practitioner]);

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
  
  async function fetchPatients(id) {
    try {
      const practitionerParams = {
        practitionerId: id
      };
  
      // const response = await API.graphql({
      //   query: patientsPractitionersByPractitionerId,
      //   variables: {
      //     input: practitionerParams
      //   }
      // });

      const response = await API.graphql(
        graphqlOperation(patientsPractitionersByPractitionerId, practitionerParams)
      );
      
      setPatients(response.data.patientsPractitionersByPractitionerId.items);
    } 
    catch (error) {
      console.log(error)
    }
  }
  
  const message =
    route === 'authenticated' ? 'Patients Assigned' : 'Loading...';
    return (
      <>
        <Heading level={1}>{message}</Heading>
        {patients.map((entry) => (
          // <div style={{ border: '1px solid black', padding: 10, borderRadius: 10}}>
          // {patient.name}
          // {patient.birthDate}
          // {patient.address}
          // </div>
          <li key={entry.patient.id}>
            <p>
              <b>{entry.patient.name}:</b>
              {entry.patient.birthDate}
              {entry.patient.address}
            </p>
          </li>
        ))}
      </>
    );
}