import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id : 1, description : 'test'},
    {id : 2, description : 'test'},
    {id : 3, description : 'test'}
  ]

  // todo = {
  //   id : 1,
  //   description : 'todo object creation'
  // }

  constructor() { }

  ngOnInit() {
    console.log(this.todo)
  }

}
