import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : String
  password : String
  errorMessage = 'Invalid Credentials'

  invalidLogin = false

  //We want the dependancy so we inject it in the constructor
  //dependency injection is built in in Angular
  //Router variable is now a member variable
  //private access modifier only allow it to be used inside this class 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  validateUserCredentials() {
    if(this.userName==='test' && this.password==='test') {
      this.invalidLogin = false
      console.log('valid log in')
      this.router.navigate(['welcome', this.userName]);
    } else {
      this.invalidLogin = true
      console.log('invalid login')
    }
  }
}
