import * as admin from 'firebase-admin'
import { User } from '../models/user'

export class UserActions {
    private firebase: admin.app.App
    constructor(firebase: admin.app.App) {
        this.firebase = firebase
    }

    public addUser(user: User): Promise<admin.auth.UserRecord> {
        const newUserPromise = this.firebase.auth().createUser(user)
        newUserPromise.then((userRecord) => {
            console.log("Successfully created new user:", userRecord);
        })
        .catch((error) => {
            console.log("Error creating new user:", error);
        })
        return newUserPromise
    }

    public decodeToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
        return this.firebase.auth().verifyIdToken(idToken)
    }

    public getAllUsers(perPage: number = 50): Promise<admin.auth.ListUsersResult> {
        const promisedNewToken = this.firebase.auth().listUsers(perPage)
        return promisedNewToken
    }
}