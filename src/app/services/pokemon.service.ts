import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private domainUrl : string = "https://serebii.net";
  private imgUrl : string = this.domainUrl + "/blackwhite/pokemon/{}.png";
  private iconUrl : string = this.domainUrl + "/pokedex-xy/icon/{}.png";

  mockData : Pokemon[] = [
    {
      id: 1,
      name: "Bulbasaur",
      moveset: [
        "Razor Leaf",
        "Tackle",
        "Growl"
      ]
    },
    {
      id: 4,
      name: "Charmander",
      moveset: [
        "Ember",
        "Tail Whip",
        "Protect"
      ]
    },
    {
      id: 7,
      name: "Squirtle",
      moveset: [
        "Water Gun",
        "Double Team",
        "Skull Bash"
      ]
    }
  ]

  public getPokemon() : Pokemon[] {
    return this.mockData;
  }

  getPokemonIcon(pokemon : Pokemon) {
    return this.iconUrl.replace("{}", this.formatId(pokemon.id));  
  }

  getPokemonImage(pokemon : Pokemon) {
    return this.imgUrl.replace("{}", this.formatId(pokemon.id));  
  }

  private formatId(id : number) : string {
    return String(id).padStart(3, "0");
  }
}
