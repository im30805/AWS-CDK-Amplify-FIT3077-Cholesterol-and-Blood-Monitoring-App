/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      name
      gender
      birthDate
      deceasedDateTime
      address
      height {
        valueQuantity
        unit
        __typename
      }
      weight {
        valueQuantity
        unit
        __typename
      }
      BMI {
        valueQuantity
        unit
        __typename
      }
      cholesterolRecord {
        recordNumber
        valueQuantity
        unit
        issued
        __typename
      }
      bloodPressureRecord {
        recordNumber
        valueQuantityDiastolic
        valueQuantitySystolic
        unitDiastolic
        unitSystolic
        issued
        __typename
      }
      heartRateRecord {
        recordNumber
        valueQuantity
        unit
        issued
        __typename
      }
      respiratoryRateRecord {
        recordNumber
        valueQuantity
        issued
        unit
        __typename
      }
      practitionersAssigned {
        items {
          id
          patientId
          practitionerId
          patient {
            id
            name
            gender
            birthDate
            deceasedDateTime
            address
            height {
              valueQuantity
              unit
              __typename
            }
            weight {
              valueQuantity
              unit
              __typename
            }
            BMI {
              valueQuantity
              unit
              __typename
            }
            cholesterolRecord {
              recordNumber
              valueQuantity
              unit
              issued
              __typename
            }
            bloodPressureRecord {
              recordNumber
              valueQuantityDiastolic
              valueQuantitySystolic
              unitDiastolic
              unitSystolic
              issued
              __typename
            }
            heartRateRecord {
              recordNumber
              valueQuantity
              unit
              issued
              __typename
            }
            respiratoryRateRecord {
              recordNumber
              valueQuantity
              issued
              unit
              __typename
            }
            practitionersAssigned {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          practitioner {
            id
            identifier
            name
            address
            email
            gender
            organization
            organizationIdentifier
            specialty
            specialtyCode
            patientsAssigned {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        gender
        birthDate
        deceasedDateTime
        address
        height {
          valueQuantity
          unit
          __typename
        }
        weight {
          valueQuantity
          unit
          __typename
        }
        BMI {
          valueQuantity
          unit
          __typename
        }
        cholesterolRecord {
          recordNumber
          valueQuantity
          unit
          issued
          __typename
        }
        bloodPressureRecord {
          recordNumber
          valueQuantityDiastolic
          valueQuantitySystolic
          unitDiastolic
          unitSystolic
          issued
          __typename
        }
        heartRateRecord {
          recordNumber
          valueQuantity
          unit
          issued
          __typename
        }
        respiratoryRateRecord {
          recordNumber
          valueQuantity
          issued
          unit
          __typename
        }
        practitionersAssigned {
          items {
            id
            patientId
            practitionerId
            patient {
              id
              name
              gender
              birthDate
              deceasedDateTime
              address
              createdAt
              updatedAt
              __typename
            }
            practitioner {
              id
              identifier
              name
              address
              email
              gender
              organization
              organizationIdentifier
              specialty
              specialtyCode
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPractitioner = /* GraphQL */ `
  query GetPractitioner($id: ID!) {
    getPractitioner(id: $id) {
      id
      identifier
      name
      address
      email
      gender
      organization
      organizationIdentifier
      specialty
      specialtyCode
      patientsAssigned {
        items {
          id
          patientId
          practitionerId
          patient {
            id
            name
            gender
            birthDate
            deceasedDateTime
            address
            height {
              valueQuantity
              unit
              __typename
            }
            weight {
              valueQuantity
              unit
              __typename
            }
            BMI {
              valueQuantity
              unit
              __typename
            }
            cholesterolRecord {
              recordNumber
              valueQuantity
              unit
              issued
              __typename
            }
            bloodPressureRecord {
              recordNumber
              valueQuantityDiastolic
              valueQuantitySystolic
              unitDiastolic
              unitSystolic
              issued
              __typename
            }
            heartRateRecord {
              recordNumber
              valueQuantity
              unit
              issued
              __typename
            }
            respiratoryRateRecord {
              recordNumber
              valueQuantity
              issued
              unit
              __typename
            }
            practitionersAssigned {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          practitioner {
            id
            identifier
            name
            address
            email
            gender
            organization
            organizationIdentifier
            specialty
            specialtyCode
            patientsAssigned {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPractitioners = /* GraphQL */ `
  query ListPractitioners(
    $filter: ModelPractitionerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPractitioners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        identifier
        name
        address
        email
        gender
        organization
        organizationIdentifier
        specialty
        specialtyCode
        patientsAssigned {
          items {
            id
            patientId
            practitionerId
            patient {
              id
              name
              gender
              birthDate
              deceasedDateTime
              address
              createdAt
              updatedAt
              __typename
            }
            practitioner {
              id
              identifier
              name
              address
              email
              gender
              organization
              organizationIdentifier
              specialty
              specialtyCode
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPatientsPractitioners = /* GraphQL */ `
  query GetPatientsPractitioners($id: ID!) {
    getPatientsPractitioners(id: $id) {
      id
      patientId
      practitionerId
      patient {
        id
        name
        gender
        birthDate
        deceasedDateTime
        address
        height {
          valueQuantity
          unit
          __typename
        }
        weight {
          valueQuantity
          unit
          __typename
        }
        BMI {
          valueQuantity
          unit
          __typename
        }
        cholesterolRecord {
          recordNumber
          valueQuantity
          unit
          issued
          __typename
        }
        bloodPressureRecord {
          recordNumber
          valueQuantityDiastolic
          valueQuantitySystolic
          unitDiastolic
          unitSystolic
          issued
          __typename
        }
        heartRateRecord {
          recordNumber
          valueQuantity
          unit
          issued
          __typename
        }
        respiratoryRateRecord {
          recordNumber
          valueQuantity
          issued
          unit
          __typename
        }
        practitionersAssigned {
          items {
            id
            patientId
            practitionerId
            patient {
              id
              name
              gender
              birthDate
              deceasedDateTime
              address
              createdAt
              updatedAt
              __typename
            }
            practitioner {
              id
              identifier
              name
              address
              email
              gender
              organization
              organizationIdentifier
              specialty
              specialtyCode
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      practitioner {
        id
        identifier
        name
        address
        email
        gender
        organization
        organizationIdentifier
        specialty
        specialtyCode
        patientsAssigned {
          items {
            id
            patientId
            practitionerId
            patient {
              id
              name
              gender
              birthDate
              deceasedDateTime
              address
              createdAt
              updatedAt
              __typename
            }
            practitioner {
              id
              identifier
              name
              address
              email
              gender
              organization
              organizationIdentifier
              specialty
              specialtyCode
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPatientsPractitioners = /* GraphQL */ `
  query ListPatientsPractitioners(
    $filter: ModelPatientsPractitionersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientsPractitioners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        practitionerId
        patient {
          id
          name
          gender
          birthDate
          deceasedDateTime
          address
          height {
            valueQuantity
            unit
            __typename
          }
          weight {
            valueQuantity
            unit
            __typename
          }
          BMI {
            valueQuantity
            unit
            __typename
          }
          cholesterolRecord {
            recordNumber
            valueQuantity
            unit
            issued
            __typename
          }
          bloodPressureRecord {
            recordNumber
            valueQuantityDiastolic
            valueQuantitySystolic
            unitDiastolic
            unitSystolic
            issued
            __typename
          }
          heartRateRecord {
            recordNumber
            valueQuantity
            unit
            issued
            __typename
          }
          respiratoryRateRecord {
            recordNumber
            valueQuantity
            issued
            unit
            __typename
          }
          practitionersAssigned {
            items {
              id
              patientId
              practitionerId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        practitioner {
          id
          identifier
          name
          address
          email
          gender
          organization
          organizationIdentifier
          specialty
          specialtyCode
          patientsAssigned {
            items {
              id
              patientId
              practitionerId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const practitionerByEmailAndName = /* GraphQL */ `
  query PractitionerByEmailAndName(
    $email: String!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelpractitionerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    practitionerByEmailAndName(
      email: $email
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identifier
        name
        address
        email
        gender
        organization
        organizationIdentifier
        specialty
        specialtyCode
        patientsAssigned {
          items {
            id
            patientId
            practitionerId
            patient {
              id
              name
              gender
              birthDate
              deceasedDateTime
              address
              createdAt
              updatedAt
              __typename
            }
            practitioner {
              id
              identifier
              name
              address
              email
              gender
              organization
              organizationIdentifier
              specialty
              specialtyCode
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const patientsPractitionersByPatientId = /* GraphQL */ `
  query PatientsPractitionersByPatientId(
    $patientId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientsPractitionersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientsPractitionersByPatientId(
      patientId: $patientId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        practitionerId
        patient {
          id
          name
          gender
          birthDate
          deceasedDateTime
          address
          height {
            valueQuantity
            unit
            __typename
          }
          weight {
            valueQuantity
            unit
            __typename
          }
          BMI {
            valueQuantity
            unit
            __typename
          }
          cholesterolRecord {
            recordNumber
            valueQuantity
            unit
            issued
            __typename
          }
          bloodPressureRecord {
            recordNumber
            valueQuantityDiastolic
            valueQuantitySystolic
            unitDiastolic
            unitSystolic
            issued
            __typename
          }
          heartRateRecord {
            recordNumber
            valueQuantity
            unit
            issued
            __typename
          }
          respiratoryRateRecord {
            recordNumber
            valueQuantity
            issued
            unit
            __typename
          }
          practitionersAssigned {
            items {
              id
              patientId
              practitionerId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        practitioner {
          id
          identifier
          name
          address
          email
          gender
          organization
          organizationIdentifier
          specialty
          specialtyCode
          patientsAssigned {
            items {
              id
              patientId
              practitionerId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const patientsPractitionersByPractitionerId = /* GraphQL */ `
  query PatientsPractitionersByPractitionerId(
    $practitionerId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientsPractitionersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientsPractitionersByPractitionerId(
      practitionerId: $practitionerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        practitionerId
        patient {
          id
          name
          gender
          birthDate
          deceasedDateTime
          address
          height {
            valueQuantity
            unit
            __typename
          }
          weight {
            valueQuantity
            unit
            __typename
          }
          BMI {
            valueQuantity
            unit
            __typename
          }
          cholesterolRecord {
            recordNumber
            valueQuantity
            unit
            issued
            __typename
          }
          bloodPressureRecord {
            recordNumber
            valueQuantityDiastolic
            valueQuantitySystolic
            unitDiastolic
            unitSystolic
            issued
            __typename
          }
          heartRateRecord {
            recordNumber
            valueQuantity
            unit
            issued
            __typename
          }
          respiratoryRateRecord {
            recordNumber
            valueQuantity
            issued
            unit
            __typename
          }
          practitionersAssigned {
            items {
              id
              patientId
              practitionerId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        practitioner {
          id
          identifier
          name
          address
          email
          gender
          organization
          organizationIdentifier
          specialty
          specialtyCode
          patientsAssigned {
            items {
              id
              patientId
              practitionerId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
