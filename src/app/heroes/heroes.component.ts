import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = "Windstorm";
  // hero2 = "Krishna";\

  heroes = HEROES;
  selectedHero : Hero;

  hero: Hero = {
    id : 1,
    name : 'Windstrom'
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // console.log(hero);
  }

}
