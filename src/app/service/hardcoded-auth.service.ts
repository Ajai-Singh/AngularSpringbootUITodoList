import { Injectable } from '@angular/core';

@Injectable()
export class HardcodedAuthService {

  constructor() { }

  userAuth(userName, password) { 
    console.log('before ' + this.isUserLoggedIn)
    if(userName === 'test' && password === 'test') {
      sessionStorage.setItem('authenticatedUser', userName)
      console.log('After ' + this.isUserLoggedIn)
      return true
    } else {
      return false
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
}
