import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Pokemon } from './../../interfaces/pokemon';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PokemonsService {

  baseUrl: string;
  customHeaders: any;
  options: Object;
  token: string;

  pokemons: Array<Pokemon>;
  _pokemonsBS = new BehaviorSubject<Array<Pokemon>>([]);
  pokemons$: Observable<Array<Pokemon>> = this._pokemonsBS.asObservable();

  constructor(private http: Http) {
    this.baseUrl = "http://localhost:3000";
    
    this.token = localStorage.getItem('auth-token');
    this.customHeaders = new Headers({ 'Content-Type': 'application/json', 'x-auth': this.token });
    this.options = new RequestOptions({ headers: this.customHeaders });

    // this._pokemonsBS.next(this.pokemons);
  }

  getPokemons() {
    return this.http.get(`${this.baseUrl}/api/pokemons`, this.options)
      .map(response => response.json())
      .subscribe(data => {
        this.pokemons = data.pokemons;
        this._pokemonsBS.next(this.pokemons);
      }, error => {
        console.log(error);
      })
  }

  deletePokemon(pokemonId: number) {
    return this.http.delete(`${this.baseUrl}/api/pokemon/${pokemonId}`, this.options)
      .map(response => response.json())
      .subscribe(data => {
        console.log(this.pokemons);
        this.pokemons.forEach((pokemon, index) => {
          if (pokemon.id === pokemonId) {
            this.pokemons.splice(index, 1);
          }
        });

        // this._pokemonsBS.next(this.pokemons);
      }, error => {
        console.log(error);
      })
  }

  updatePokemon(pokemon: Pokemon, pokemonId: number) {
    return this.http.put(`${this.baseUrl}/api/pokemon/${pokemonId}`, JSON.stringify(pokemon), this.options)
      .map(response => response.json())
      .subscribe(data => {
        this.pokemons.forEach((pokemon, index) => {
          if (pokemon.id === data.id) {
            this.pokemons[index] = data;
          }
        });

        // this._pokemonsBS.next(this.pokemons);
      }, error => {
        console.log(error);
      })

  }

  addPokemon(pokemon: Pokemon) {
    return this.http.post(`${this.baseUrl}/api/pokemon`, JSON.stringify(pokemon), this.options)
      .map(response => response.json())
      .subscribe(data => {
        this.pokemons.push(data.pokemon);
        // this._pokemonsBS.next(this.pokemons);
      }, error => {
        console.log(error);
      })
  }

}
