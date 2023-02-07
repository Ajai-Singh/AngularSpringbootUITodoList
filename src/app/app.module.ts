import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

//Everytime we create a new component we add it here
//Note that we add all the components above error one
// as ** matches anything
const routes: Routes = [
  // default path
  { path:'', component: LoginComponent}, 
  { path:'login', component: LoginComponent},
  { path:'welcome/:name', component: WelcomeComponent},
  { path:'todos', component:ListTodosComponent},

  { path:'**', component: InvalidUrlComponent} //Anything other than a valid link will be sent to the invalid url compoent
  //Anything other than a valid String will be known as **
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    InvalidUrlComponent,
    ListTodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
