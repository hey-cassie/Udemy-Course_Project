import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 1),
        new Ingredient('Tomatoes', 2),
      ];

    getIngredients() {
        return this.ingredients.slice();
        //only returning a copy of ingredient array here
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
        //finally using the spread operator here!
    }
}