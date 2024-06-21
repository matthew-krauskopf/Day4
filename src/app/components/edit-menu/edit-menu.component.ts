import { Component, Inject } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-menu',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './edit-menu.component.html',
  styleUrl: './edit-menu.component.css'
})
export class EditMenuComponent {
  constructor(
    public dialogRef: MatDialogRef<EditMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public fieldVal: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
