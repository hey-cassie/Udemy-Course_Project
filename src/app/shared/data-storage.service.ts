import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(
      private http: HttpClient, 
      private recipeService: RecipeService, 
      private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
        .put('https://udemy-course-project-afba6-default-rtdb.firebaseio.com/recipes.json', 
        recipes
        )
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
          return this.http
          .get<Recipe[]>(
            //'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json'
            'https://udemy-course-project-afba6-default-rtdb.firebaseio.com/recipes.json'
          )
          .pipe(
            map(recipes => {
              return recipes.map(recipe => {
                return {
                 ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
              };
            });
          }),
          tap(recipes => {
            this.recipeService.setRecipes(recipes);
          })
        );
        //tap operator allows us to access code without altering datd
        //we no longer subcribe but return and in our header component we now need to subscribe);
      }
}
