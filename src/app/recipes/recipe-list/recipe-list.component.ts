import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Test Recipe', 'A big juicy cheese burger',
  'https://eccos-pizza.com/wp-content/uploads/2019/05/cheese-burger.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
