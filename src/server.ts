import * as dotenv from 'dotenv'
import {App} from './config/express'

const config = dotenv.config({ path: `.env/${process.argv[2]}` }).parsed
const app = new App(config)

app.init()
app.initServiceStatus()

app.startServer()