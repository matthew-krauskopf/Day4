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
        "label": "Edit Pokemon Name", 
        "initVal": this.pokemon!.name
      }
    });

    dialogRef.afterClosed().subscribe(newName => {
      if (newName) this.pokemon!.name = newName;
    });
  }

  editMoveDialog(i : number) {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      data: {
        "label": "Edit Move Name", 
        "initVal": this.pokemon!.moveset[i]
      }
    });

    dialogRef.afterClosed().subscribe(newName => {
      if (newName) this.pokemon!.moveset[i] = newName;
    });
  }

  addMoveDialog() {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      data: {
        "label": "Add Move", 
        "initVal": ""
      }
    });

    dialogRef.afterClosed().subscribe(newMove => {
      if (newMove) this.pokemon!.moveset.push(newMove);
    });
  }


  getPokemonIcon(pokemon : Pokemon) {
    return this.imgUrl.replace("{}", String(pokemon.id).padStart(3, "0"));  
  }
}
