import * as fs from 'fs'
import * as path from 'path'
import * as admin from 'firebase-admin'
import { UserActions } from './UserActions';

export class FireBaseAdmin {
    private keyLocation: string
    private accountConfig: any
    private firebase: admin.app.App
    public userActions: UserActions

    constructor(keyLocation: string) {
        this.keyLocation = keyLocation
        this.accountConfig = JSON.parse(
            fs.readFileSync(
                path.join(__dirname, `../../${keyLocation}`)
            ).toString()
        )
        this.firebase = admin.initializeApp({
            credential: admin.credential.cert(this.accountConfig),
            databaseURL: `https://${this.accountConfig.project_id}.firebase.com`
        })
        this.userActions = new UserActions(this.firebase)
    }
}