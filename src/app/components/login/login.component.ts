import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
