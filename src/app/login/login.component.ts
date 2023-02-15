import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HardcodedAuthService] //When injecting a service into a component we need to register it as a provider
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
  constructor(private router: Router,
    private authService : HardcodedAuthService) { }

  ngOnInit() {
  }

  validateUserCredentials() {
    if(this.authService.userAuth(this.userName, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.userName]);
    } else {
      this.invalidLogin = true
    }
  }
}
