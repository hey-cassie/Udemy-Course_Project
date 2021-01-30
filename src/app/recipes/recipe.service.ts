import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Big Juicy Cheeseburger', 'Droooool',
    //     'https://eccos-pizza.com/wp-content/uploads/2019/05/cheese-burger.jpg', [
    //         new Ingredient('Beef Patty', 1),
    //         new Ingredient('Bunz', 1)
    //     ]),
    //     new Recipe('Banana Split', 'Yummmmm',
    //     'https://cdn.kiwilimon.com/recetaimagen/26478/26077.jpg', [
    //         new Ingredient('Nanners', 2),
    //         new Ingredient('Sprinkles!', 300)
    //     ])
    //   ];
    private recipes: Recipe[] = [];
    
    constructor(private shoppingListService: ShoppingListService){}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
    

      getRecipes() {
          return this.recipes.slice();
          //slice will give us a copy of the array
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          //this.recipes.push(this.recipeSelected.ingredients)
          this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}