import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {
  //We can use the following HTTP Client to make RESTful webservice calls to a service
  //provider GET,POST,PUT,DELETE etc
  constructor(private http:HttpClient) { }

  executeHelloService() {
    //Cross-Origin Resource Sharing
    //why is cors important
    //Because both our apps are running on a different server
    //Soringboot prevents calls from third party apps
    //We need to allow spring boot to recieve calls from another host
    //ie. 4200 port in our case
    //controller class -> @CrossOrigin(origins="http://localhost:4200")
    //We call this the CORS error. CORS error due to browser's same origin policy. 
    // To get around this, you need to tell your browser to enable your client and your 
    // server to share resources while being of different origins. 
    // In other words, you need to enable cross-origin resource sharing or CORS in your application

    //console.log('hello back end service triggered')

    //this is a asycn backend call
    return this.http.get('http://localhost:8080/helloWorld', { responseType: 'text' }).subscribe(
      response => console.log(response)
    )
  }
}
