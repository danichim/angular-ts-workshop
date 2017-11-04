import { Express, Request, Response } from "express"
import { FireBaseAdmin } from "../firebase/admin";

export namespace UserRoutes {
    export function init(app: Express, firebase: FireBaseAdmin): void {
        app.get('/api/users', (req: Request, res: Response) => {
            firebase.userActions.getAll(Number(req.query.perPage))
                .then((userList) => {
                    res.send(userList)
                }).catch((err) => {
                    res.status(500).send(
                        `Error geting all users! ${err}`
                    )
                })
        })
    }
}
