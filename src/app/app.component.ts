import {Component, OnInit} from '@angular/core';
import {Dog} from "./shared/models/Dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*Write the function always inside this class*/
  ngOnInit(): void {
    this.doggies = this.fetchDoggos();
    /* When ever the page loads this method OnInit is called and it will get list of dogs and assign it to variable */
  }
  title = 'SDA Front-End practice';
  toShow = true;
  fruits = ["Apple", "Banana", "Mango", "Strawberry"];

  doggies: Dog[] = [];
  dogNames: string[] = ['Caesar', 'Scooby', 'Lucky'];

  fetchDoggos(): Dog[] {
    let doggos: Dog[] = [];

    doggos.push(new Dog('Jack', 'Dober', 'Runs faster'));
    doggos.push(new Dog('Shadow', 'German Shepperd', 'Eats well'));

    return doggos;
  }
  woofAlertBox() {
    alert("Woof-woof!");
  }

  showAlertBox() {
    alert("Click me is clicked!");
  }

  /*To add a new dog function*/
  addDog() {
    let dogName = this.dogNames.at(Math.floor(Math.random() * this.dogNames.length)); //this will get random name from list
    // @ts-ignore
    this.doggies.push(new Dog(dogName, 'Dalmatian', 'Barks louder'));
  }

}
