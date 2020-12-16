import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Big Juicy Cheeseburger', 'Droooool',
        'https://eccos-pizza.com/wp-content/uploads/2019/05/cheese-burger.jpg', [
            new Ingredient('Beef Patty', 1),
            new Ingredient('Bunz', 1)
        ]),
        new Recipe('Pepperoni Pizza', 'Yummmmm',
        'https://media2.fdncms.com/metrotimes/imager/u/original/22492809/60286338_10161625009945177_2714216681630072832_o.jpg', [
            new Ingredient('Pizza Doh!', 1),
            new Ingredient('Pepperoni', 30)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes() {
          return this.recipes.slice();
          //slice will give us a copy of the array
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          //this.recipes.push(this.recipeSelected.ingredients)
          this.shoppingListService.addIngredients(ingredients);
      }
}