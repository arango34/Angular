import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showRecipes = true;

  constructor() {}

  onSetState(val: string) {
    console.log(val);

    if (
      (val === 'Recipes' && this.showRecipes) ||
      (val === 'Shopping List' && !this.showRecipes)
    )
      return;
    this.showRecipes = !this.showRecipes;
  }
}
