import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor, MatButtonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  
  @Input() pokemon? : Pokemon[]
  @Output() selectedPokemon = new EventEmitter<Pokemon>();

  selectPokemon(pokemon : Pokemon) {
    this.selectedPokemon.emit(pokemon);
  }
}
