import { PokemonsService } from './../../../common/services/pokemons/pokemons.service';
import { NgForm } from '@angular/forms';
import { Pokemon } from './../../../common/interfaces/pokemon';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-pokemon',
  templateUrl: './update-pokemon.component.html',
  styleUrls: ['./update-pokemon.component.css']
})
export class UpdatePokemonComponent implements OnInit {

  @Input() pokemon: Pokemon
  @Output() emitCancel = new EventEmitter();

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
  }

  cancelEdit() {
    this.emitCancel.emit();
  }

  updatePokemon(updateForm: NgForm, pokemonId: number) {
    this.pokemonService.updatePokemon(updateForm.value, pokemonId);
    this.emitCancel.emit();
  }

}
