import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../service/backend-service.service';

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
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todo : Todo
  updateResponse : string
  id : number

  constructor(private router : Router,
    private backendService : BackendService,
    private activatedRoute : ActivatedRoute) { 

  }

  ngOnInit() {
    //.subscribe is async which means when ngOnInit loads the UI the todo object might not have
    //been fetched in time so it might be null
    //we can avoid console errors by passing in a dummy value at the start

    this.todo = new Todo(-1, '', false, new Date(), sessionStorage.getItem('authenticatedUser'))

    this.id = this.activatedRoute.snapshot.params['id']

    //checking to see if id is = -1
    //if minus one dont fetch the todo as we're creating a new one
    if(this.id != -1) {
    this.backendService.getTodo(this.id).subscribe( 
      (response) => {
        console.log(this.id);
        console.log('todo fetched');
        this.todo = response;
      }),
      error => {
        console.log("Error");
      }
    }
}

  updateTodo() {
    console.log(this.todo)
    this.todo.userName = sessionStorage.getItem('authenticatedUser')
    if(this.id === -1) {
      console.log('create todo service')
      this.backendService.createTodo(this.todo).subscribe( 
        (response) => {
          console.log('todo created');
          this.router.navigate(['todos'])
        }),
        error => {
          this.updateResponse = error
          console.log("Error");
      }
    } else {
      console.log("update service started")
      this.backendService.updateTodo(this.todo).subscribe( 
        (response) => {
          console.log('todo updated');
          this.router.navigate(['todos'])
        }),
        error => {
          this.updateResponse = error
          console.log("Error");
      }
    }
  }
}
