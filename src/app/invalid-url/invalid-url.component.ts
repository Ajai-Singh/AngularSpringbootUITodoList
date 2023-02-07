import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid-url',
  templateUrl: './invalid-url.component.html',
  styleUrls: ['./invalid-url.component.css']
})
export class InvalidUrlComponent implements OnInit {

  errorMessage : String = 'Please enter a valid URL!'

  constructor() { }

  ngOnInit() {
  }

}
