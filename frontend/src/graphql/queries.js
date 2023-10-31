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
      practitionerIdentifier
      practitioner
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
        practitionerIdentifier
        practitioner
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
