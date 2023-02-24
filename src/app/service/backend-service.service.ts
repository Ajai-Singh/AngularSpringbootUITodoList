import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from '@angular/http';

export class HelloWorld {
  constructor(public message:string) {
    
  }
}

export class Todo {
  constructor() {

  }
}

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

    //instead of passing in the actual value we can wrap this get call in a method
    //pass the method param as ${}
    //instead of regular '' use a back tick ``
    //this is a lot easier than java in java you have to create a hashmap with a key value pair
    //and add it using a queryparam call to the endpoint url
    return this.http.get('http://localhost:8080/helloWorld', {responseType: 'text'})
  }

  executeGetWithParam(name) {
    return this.http.get<HelloWorld>(`http://localhost:8080/helloWorld/${name}`)
  }

  //GET API call
  //Returns a list of Todos from backend service
  getTodos() {
    return this.http.get<Todo>('http://localhost:8080/todos')
  }


  //POST API call
  //Created Todo object and persists to DB
  createTodo() {
    return this.http.get<Todo>('http://localhost:8080/createTodo')
  }

  //PUT API call
  //Updates Todo in DB
  updateTodo(todo) {
    return this.http.get<Todo>('http://localhost:8080/update')
  }

  //DELETE API call
  //Deleted todo in DB
  delete(todo) {
    return this.http.get<Todo>('http://localhost:8080/delete')
  }

}
