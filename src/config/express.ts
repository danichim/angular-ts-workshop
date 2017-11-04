import * as express from 'express'
import {Express, Request, Response} from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'

export class App {
    private config: any
    public app: Express

    constructor(config: any) {
        this.config = config
        this.app = express()
    }
    public init(): void {
        this.app.set("port", this.config.PORT || 3000)
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(morgan('dev'))
    }
    public initServiceStatus(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.send({serviceStatus: 'working'})
        })
    }
    public startServer(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log(`App is running on: ${this.config.PORT}`)
        })
    }
}