import { PokemonsService } from './../../../common/services/pokemons/pokemons.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  @Output() emitSave = new EventEmitter();

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
  }

  addPokemon(addForm: NgForm) {
    this.pokemonService.addPokemon(addForm.value);
    this.emitSave.emit();
  }

}
