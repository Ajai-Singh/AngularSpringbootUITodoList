//similar to java eg import java.util.Array;
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; //importing another class into this class
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router'; 
import { BackendService } from '../service/backend-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [BackendService, HttpClient]
})

//public class WelcomeComponent implements repo {
//public allows us to use the class in another file
//Typescript uses export
//if you want to use a class outside the boundry of this module you use export
export class WelcomeComponent implements OnInit {
  //Typescript is smart you ca remove the type and it will understand
  message : string = 'Hello World!'

  userName : string = ''

  //Activated route can handle taking in a parameter in the URL

  //public test() {
  constructor(private activatedRoute: ActivatedRoute, private router : Router,
    private backendService : BackendService) { 
   
  }

  //void init in java
  //this method wont return anything
  ngOnInit() : void {
    console.log(this.message)
    this.userName = this.activatedRoute.snapshot.params['name']  
    console.log(this.activatedRoute.snapshot.params['name'])
  }

  TriggerBackEndService() {
    console.log("Backend service trigger")
    this.backendService.executeHelloService()
  }
}
