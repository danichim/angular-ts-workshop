import * as admin from "firebase-admin";
import { Pokemon } from '../models/pokemon';

export class PokemonActions {
  firebase: admin.app.App;
  dbRef: admin.database.Reference
  
  constructor(firebase: admin.app.App) {
    this.firebase = firebase;
    this.dbRef = firebase.database().ref('workshop-typescript').child('pokemons')
  }
  
  public getAll(perPage: number = 50): Promise<any> {
    return new Promise((resolve: (value: Pokemon[]) => void, reject: (err: any) => void) => {
      this.dbRef.once('value', (snapshot) => {
        const pokes = snapshot.val()
        const pokesArray: Pokemon[] = []
        for (const key in pokes) {
          if (pokes.hasOwnProperty(key)) {
            pokesArray.push(Object.assign({id: key}, pokes[key]))
          }                
        }
        resolve(pokesArray)
      })
    })
  }
}
