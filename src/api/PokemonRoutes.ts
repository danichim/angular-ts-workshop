import { Express, Request, Response } from "express"
import { FireBaseAdmin } from "../firebase/admin";

export namespace PokemonRoutes {
    export function init(app: Express, firebase: FireBaseAdmin): void {
        app.get('/api/pokemons', (req: Request, res: Response) => {
            firebase.pokemonActions
              .getAll(Number(req.query.perPage))
              .then(pokemonList => {
                res.send(pokemonList);
              })
              .catch(err => {
                res
                  .status(500)
                  .send(`Error geting all users! ${err}`);
              });
        })
    }
}
