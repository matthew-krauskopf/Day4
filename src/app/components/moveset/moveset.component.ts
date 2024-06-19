import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-moveset',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './moveset.component.html',
  styleUrl: './moveset.component.css'
})
export class MovesetComponent {
  @Input() pokemon? : Pokemon;
}
