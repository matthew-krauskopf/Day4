import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { Pokemon } from '../pokemon';
import { MovesetComponent } from '../moveset/moveset.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [PokemonListComponent, MovesetComponent, MatSidenavModule],
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
}

