import { PokemonsService } from './../../../common/services/pokemons/pokemons.service';
import { Pokemon } from './../../../common/interfaces/pokemon';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  @Input() pokemons: Array<Pokemon>;
  displayEdit: number;

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
  }

  deletePokemon(pokemonId: number){
    this.pokemonService.deletePokemon(pokemonId);
  }

  showEdit(pokemonId: number) {
    this.displayEdit = pokemonId;
  }

  hideEdit(){
    this.displayEdit = 0;
  }

}
