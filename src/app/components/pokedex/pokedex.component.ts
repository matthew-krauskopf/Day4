import { Component, } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { Pokemon } from '../../model/pokemon';
import { MovesetComponent } from '../moveset/moveset.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [PokemonListComponent, MovesetComponent, MatSidenavModule, ToolbarComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  allPokemon : Pokemon[];

  constructor(pokemonService : PokemonService) {
    this.allPokemon = pokemonService.getPokemon();
  }

  selectedPokemon? : Pokemon;
  newPokemon? : Pokemon;
  sidenavOpened : boolean = true;

  toggleButton($val : boolean) {
    this.sidenavOpened = $val;
  }

  createPokemon($event : Pokemon) {
    this.allPokemon.push($event);
    $event.id = this.getNewPokemonId();
    this.allPokemon.sort((a, b) => a.id - b.id)  
    this.selectedPokemon = $event;
  }

  deletePokemon(pokemon : Pokemon) {
    this.allPokemon = this.allPokemon.filter(p => p.id != pokemon.id);
    this.selectedPokemon = undefined;
  }

  getNewPokemonId() : number {
    let max = 0;
    for (let data of this.allPokemon) {
      max = max > data.id ? max : data.id;
    }
    return max+1;
  }
}

