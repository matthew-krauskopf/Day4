import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day4';
}
