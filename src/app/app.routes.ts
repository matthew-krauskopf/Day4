import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: "home", component: PokedexComponent },
    { path: "", component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];
