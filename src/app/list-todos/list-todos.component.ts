import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend-service.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public status : boolean,
    public completionDate : Date,
    public userName : string
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = Array<Todo>;
  // todos = [
  //   new Todo(1, 'test', true, new Date()),
  //   {id : 1, description : 'test'},
  //   {id : 2, description : 'test'},
  //   {id : 3, description : 'test'}
  // ]

  // todo = {
  //   id : 1,
  //   description : 'todo object creation'
  // }

  deleteResponse : string

  constructor(private backendService : BackendService,
    private router : Router) { }

  ngOnInit() {
    console.log(this.todos)
    this.getTodos()
  }

  getTodos() {
    this.backendService.getTodos(sessionStorage.getItem('authenticatedUser')).subscribe(
      response => this.handleSuccessfulGetTodos(response), 
      error => this.handleErrorGetTodos(error)
      )
  }

  handleSuccessfulGetTodos(response) {
    this.todos = response
    console.log(response)
  }

  handleErrorGetTodos(error) {
    console.log(error)
  }

  //passing in -1 as id as we want to reuse the update todo form which takes an id
  createTodo(todo) {
    this.router.navigate(['todo', -1])
  }

  deleteTodo(todo) {
    console.log(todo)
    this.backendService.deleteById(todo.id).subscribe( 
      (data) =>{
        this.deleteResponse = 'Todo Deleted';
        this.ngOnInit();
      }),
      error => {
        this.deleteResponse = 'Error Occurred';
        console.log("Error");
      }   
  }

  updateTodo(todo) {
    this.router.navigate(['todo', todo.id])
  }
}
