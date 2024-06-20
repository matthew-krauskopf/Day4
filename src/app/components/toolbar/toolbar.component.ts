import { Component, Output, Input, EventEmitter } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  title = "Pokedex";
  sidenavOpened : boolean = true;
  @Output() emitter = new EventEmitter<boolean>();

  toggleButton() {
    this.sidenavOpened = !this.sidenavOpened;
    this.emitter.emit(this.sidenavOpened);
  }
}
