import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { NgFor, NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EditMenuComponent } from '../edit-menu/edit-menu.component';

@Component({
  selector: 'app-moveset',
  standalone: true,
  imports: [NgFor, NgIf, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './moveset.component.html',
  styleUrl: './moveset.component.css'
})
export class MovesetComponent {
  @Input() pokemon? : Pokemon;
  @Output() deleteSignal = new EventEmitter<Pokemon>();

  constructor(public dialog : MatDialog) {
  }

  imgUrl : string = "https://serebii.net/blackwhite/pokemon/{}.png";

  generateArr() {
    const arr : number[] = [];
    for (let i = this.pokemon!.moveset.length; i < 4; i++) {
      arr.push(0);
    }
    return arr;
  }

  deleteMove(move : String) {
    this.pokemon!.moveset = this.pokemon!.moveset.filter(m => m != move);
  }

  deletePokemon() {
    this.deleteSignal.emit(this.pokemon);
  }

  editNameDialog(): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      data: {
        "title": "Edit Pokemon Name", 
        "label": this.pokemon!.name,
        "id": this.pokemon!.id,
      }
    });

    dialogRef.afterClosed().subscribe(dialogOutput => {
      if (dialogOutput.label) {
        this.pokemon!.name = dialogOutput.label;
      }
      if (dialogOutput.id) {
        this.pokemon!.id = dialogOutput.id;
      }
    });
  }

  editMoveDialog(i : number) {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      data: {
        "title": "Edit Move Name", 
        "label": this.pokemon!.moveset[i]
      }
    });

    dialogRef.afterClosed().subscribe(dialogOutput => {
      if (dialogOutput.label) this.pokemon!.moveset[i] = dialogOutput.label;
    });
  }

  addMoveDialog() {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      data: {
        "title": "Add Move", 
        "label": ""
      }
    });

    dialogRef.afterClosed().subscribe(dialogOutput => {
      if (dialogOutput.label) this.pokemon!.moveset.push(dialogOutput.label);
    });
  }

  getPokemonIcon(pokemon : Pokemon) {
    return this.imgUrl.replace("{}", String(pokemon.id).padStart(3, "0"));  
  }
}
