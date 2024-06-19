import { Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: PokedexComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent },
];
