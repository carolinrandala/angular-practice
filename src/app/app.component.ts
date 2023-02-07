import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*Write the function always inside this class*/
  title = 'SDA Front-End practice';
  toShow = true;
  fruits = ["Apple", "Banana", "Mango", "Strawberry"];

  /* Task 1 */
  doggies = ["Rocky", "Jason", "Berry", "Lucky"];


  /* Task 2 */
  woofAlertBox() {
    alert("Woof-woof!");
  }

  dogsAlertBox() {
    alert("Who let the dogs out?");
  }

  showAlertBox() {
    alert("Click me is clicked!");
  }

}
