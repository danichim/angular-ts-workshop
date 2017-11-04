import * as dotenv from 'dotenv'
import { App } from './config/express'
import { FireBaseAdmin } from './firebase/admin';
import { UserRoutes } from './api/UserRoutes'
import { PokemonRoutes } from "./api/PokemonRoutes";

const config = dotenv.config({ path: `.env/${process.argv[2]}` }).parsed
const app = new App(config)
const firebase = new FireBaseAdmin(config.FIREBASE_KEY_LOCATION)

app.init()
app.initServiceStatus()
UserRoutes.init(app.app, firebase)
PokemonRoutes.init(app.app, firebase);

app.startServer()