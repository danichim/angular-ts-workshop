import { Pokemon } from './../../common/interfaces/pokemon';
import { PokemonsService } from './../../common/services/pokemons/pokemons.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  pokemons: Array<Pokemon>;
  pokemonSubscription: Subscription;

  displayAdd: boolean;
  btnText: string = "Add pokemon";

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
    this.pokemonSubscription = this.pokemonService.pokemons$
      .subscribe(data => {
        this.pokemons = data;
      }, error => {
        console.log(error);
      });
    
    this.pokemonService.getPokemons();
  }

  ngOnDestroy() {
    this.pokemonSubscription.unsubscribe();
  }

  showAdd() {
    this.displayAdd = ! this.displayAdd;
    
    if(!this.displayAdd) {
      this.btnText = "Add pokemon";
    } else {
      this.btnText ="Pokemons list";
    }
  }

  hideAdd() {
    this.displayAdd = false;
  }

}
