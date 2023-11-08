/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onCreatePatient(filter: $filter) {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onUpdatePatient(filter: $filter) {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient($filter: ModelSubscriptionPatientFilterInput) {
    onDeletePatient(filter: $filter) {
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
export const onCreatePractitioner = /* GraphQL */ `
  subscription OnCreatePractitioner(
    $filter: ModelSubscriptionPractitionerFilterInput
  ) {
    onCreatePractitioner(filter: $filter) {
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
export const onUpdatePractitioner = /* GraphQL */ `
  subscription OnUpdatePractitioner(
    $filter: ModelSubscriptionPractitionerFilterInput
  ) {
    onUpdatePractitioner(filter: $filter) {
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
export const onDeletePractitioner = /* GraphQL */ `
  subscription OnDeletePractitioner(
    $filter: ModelSubscriptionPractitionerFilterInput
  ) {
    onDeletePractitioner(filter: $filter) {
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
export const onCreatePatientsPractitioners = /* GraphQL */ `
  subscription OnCreatePatientsPractitioners(
    $filter: ModelSubscriptionPatientsPractitionersFilterInput
  ) {
    onCreatePatientsPractitioners(filter: $filter) {
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
export const onUpdatePatientsPractitioners = /* GraphQL */ `
  subscription OnUpdatePatientsPractitioners(
    $filter: ModelSubscriptionPatientsPractitionersFilterInput
  ) {
    onUpdatePatientsPractitioners(filter: $filter) {
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
export const onDeletePatientsPractitioners = /* GraphQL */ `
  subscription OnDeletePatientsPractitioners(
    $filter: ModelSubscriptionPatientsPractitionersFilterInput
  ) {
    onDeletePatientsPractitioners(filter: $filter) {
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
