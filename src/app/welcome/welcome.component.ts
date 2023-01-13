//similar to java eg import java.util.Array;
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; //importing another class into this class

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class WelcomeComponent implements repo {
//public allows us to use the class in another file
//Typescript uses export
//if you want to use a class outside the boundry of this module you use export
export class WelcomeComponent implements OnInit {
  //Typescript is smart you ca remove the type and it will understand
  message : string = 'Hello World!'


  //public test() {
  constructor() { 

  }

  //void init in java
  //this method wont return anything
  ngOnInit() : void {
    console.log(this.message)
  }
}