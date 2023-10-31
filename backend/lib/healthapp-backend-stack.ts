// https://github.com/awesome-cdk/cdk-userpool-user/blob/master/lib/example-user-pool-user-stack.ts

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
import { AmplifyGraphqlApi, AmplifyGraphqlDefinition } from '@aws-amplify/graphql-api-construct';
import * as awsCognito from "aws-cdk-lib/aws-cognito";
import { UserPoolUser } from "./utility/UserPoolUser";
import * as fs from 'fs';
import * as path from 'path'

export class HealthAppBackendStack extends cdk.Stack {
  private readonly userPool: awsCognito.UserPool;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.userPool = new awsCognito.UserPool(this, 'HealthAppCognitoUserPool', {
      userPoolName: "HealthAppCognitoUserPool",
      selfSignUpEnabled: true,
      autoVerify: {
        email: true,
      },
      accountRecovery: awsCognito.AccountRecovery.EMAIL_ONLY,
      userVerification: {
        emailStyle: awsCognito.VerificationEmailStyle.CODE,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const userPoolClient = new awsCognito.UserPoolClient(this, "HealthAppUserPoolClient", { userPool: this.userPool })

    const adminCognitoGroup = this.createCognitoGroup("Admin")
    const name = "Administrator"
    const username = "AdminHealthApp"
    const password = "Password1357*"
    const email = "away3034+admin@gmail.com"
    const address = "822 Main Street, Fitchburg, MA, 01420"
    const gender = "male"
    this.createCognitoUser(name, username, password, email, address, gender, adminCognitoGroup.groupName as string)

    this.createPractitionerCognitoAccounts(path.join(__dirname, "utility/practitionerInformation1692631321245.json"))

    const amplifyApi = new AmplifyGraphqlApi(this, "HealthAppApi", {
      definition: AmplifyGraphqlDefinition.fromFiles(path.join(__dirname, "schema.graphql")),
      authorizationModes: {
        defaultAuthorizationMode: 'API_KEY',
        apiKeyConfig: {
          expires: cdk.Duration.days(30)
        },
        userPoolConfig: {
          userPool: this.userPool
        }
      }
    })
  }

  private createPractitionerCognitoAccounts(filename: any) {
    const practitionerCognitoGroup = this.createCognitoGroup("Practitioner")
    try {
      const data = JSON.parse(fs.readFileSync(filename).toString());
      const entry = data['entry']

      //const dataLength = Object.keys(entry).length
      const dataLength = 5;

      for(let i = 0; i < dataLength; i++){
        const resource = entry[i]['resource']
        if (resource['resourceType'] === 'Practitioner') {
          const name = resource['name'][0]['prefix'][0] + " " + resource['name'][0]['given'][0] + " " + resource['name'][0]['family']
          const address = resource['address'][0]['line'][0] + ", " + resource['address'][0]['city'] + ", " + resource['address'][0]['state'] + ", " + resource['address'][0]['postalCode'] + ", " + resource['address'][0]['country']
          const email = "away3034+" + resource['telecom'][0]['value'].replace("example.com", "gmail.com")
          const gender = resource['gender']
          const username = resource['name'][0]['given'][0] + "12345"
          const password = "Password1357*"
          const groupName = "Practitioner"

          this.createCognitoUser(name, username, password, email, address, gender, practitionerCognitoGroup.groupName as string)
        }
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  private createCognitoGroup(_name: string) {
    const cognitoGroup = new awsCognito.CfnUserPoolGroup(this, _name, {
      groupName: _name,
      userPoolId: this.userPool.userPoolId,
    });

    return cognitoGroup;
  }

  private createCognitoUser(_name: string, _username: string, _password: string, _email: string, _address: string, _gender: string, _groupName: string) {
    new UserPoolUser(this, _name, {
      userPool: this.userPool,
      username: _username,
      password: _password,
      attributes: [
        { Name: 'email', Value: _email },
        { Name: 'email_verified', Value: 'true' },
        { Name: 'name', Value: _name },
        { Name: 'address', Value: _address},
        { Name: 'gender', Value:_gender}
      ],
      groupName: _groupName
    });
  }
}