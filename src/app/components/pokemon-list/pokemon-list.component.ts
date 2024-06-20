import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  
  @Input() pokemon? : Pokemon[]
  @Output() selectedPokemon = new EventEmitter<Pokemon>();
  @Output() newPokemon = new EventEmitter<Pokemon>();

  selectPokemon(pokemon : Pokemon) {
    this.selectedPokemon.emit(pokemon);
  }

  createPokemon() {
    const newMon : Pokemon = {
      "id": 0,
      "name": "New Pokemon",
      "moveset": []
    }
    this.newPokemon.emit(newMon);
  }
}
