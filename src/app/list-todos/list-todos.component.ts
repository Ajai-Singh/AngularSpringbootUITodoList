import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend-service.service';

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
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

  constructor(private backendService : BackendService) { }

  ngOnInit() {
    //console.log(this.todos)
    this.getTodos()
  }

  getTodos() {
    this.backendService.getTodos().subscribe(
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
}
