import { Component, } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { Pokemon } from '../../model/pokemon';
import { MovesetComponent } from '../moveset/moveset.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [PokemonListComponent, MovesetComponent, MatSidenavModule, ToolbarComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  mockData : Pokemon[] = [
    {
      id: 1,
      name: "Bulbasaur",
      moveset: [
        "Razor Leaf",
        "Tackle",
        "Growl"
      ]
    },
    {
      id: 4,
      name: "Charmander",
      moveset: [
        "Ember",
        "Tail Whip",
        "Protect"
      ]
    },
    {
      id: 7,
      name: "Squirtle",
      moveset: [
        "Water Gun",
        "Double Team",
        "Skull Bash"
      ]
    }
  ]

  selectedPokemon? : Pokemon;
  newPokemon? : Pokemon;
  sidenavOpened : boolean = true;

  toggleButton($val : boolean) {
    this.sidenavOpened = $val;
  }

  createPokemon($event : Pokemon) {
    this.mockData.push($event);
    $event.id = this.getNewPokemonId();
    this.mockData.sort((a, b) => a.id - b.id)  
    this.selectedPokemon = $event;
  }

  deletePokemon(pokemon : Pokemon) {
    this.mockData = this.mockData.filter(p => p.id != pokemon.id);
    this.selectedPokemon = undefined;
  }

  getNewPokemonId() : number {
    let max = 0;
    for (let data of this.mockData) {
      max = max > data.id ? max : data.id;
    }
    return max+1;
  }
}

