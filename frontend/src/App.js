import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { listPatients } from './graphql/queries';
import { API } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      const response = await API.graphql({
        query: listPatients,
      });
      setPatients(response.data.listPatients.items);
    }
    fetchPatients();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
          <h1>Patients</h1>
          {patients.map((patient) => (
            <div style={{ border: '1px solid black', padding: 10, borderRadius: 10}}>
              <h2>{patient.name}</h2>
              <p>{patient.practitioner}</p>
              <p>{patient.cholesterolValues}</p>
              <p>{patient.bloodPressureValues}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
