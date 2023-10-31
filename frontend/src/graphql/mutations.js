/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
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
      practitionerIdentifier
      practitioner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
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
      practitionerIdentifier
      practitioner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
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
      practitionerIdentifier
      practitioner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPractitioner = /* GraphQL */ `
  mutation CreatePractitioner(
    $input: CreatePractitionerInput!
    $condition: ModelPractitionerConditionInput
  ) {
    createPractitioner(input: $input, condition: $condition) {
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
  }
`;
export const updatePractitioner = /* GraphQL */ `
  mutation UpdatePractitioner(
    $input: UpdatePractitionerInput!
    $condition: ModelPractitionerConditionInput
  ) {
    updatePractitioner(input: $input, condition: $condition) {
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
  }
`;
export const deletePractitioner = /* GraphQL */ `
  mutation DeletePractitioner(
    $input: DeletePractitionerInput!
    $condition: ModelPractitionerConditionInput
  ) {
    deletePractitioner(input: $input, condition: $condition) {
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
  }
`;
