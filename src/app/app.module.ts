import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth/auth.guard';
import { HardcodedAuthService } from './service/hardcoded-auth.service';
import { BackendService } from './service/backend-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';

//Everytime we create a new component we add it here
//Note that we add all the components above error one
// as ** matches anything
const routes: Routes = [
  // default path
  { path:'login', component: LoginComponent}, 
  { path:'logout', component: LoginComponent},
  { path:'welcome/:name', component: WelcomeComponent, canActivate:[AuthGuard]},
  { path:'todos', component:ListTodosComponent, canActivate:[AuthGuard]},
  { path:'todo/:id', component:TodoComponent, canActivate:[AuthGuard]},

  { path:'**', component: InvalidUrlComponent} //Anything other than a valid link will be sent to the invalid url compoent
  //Anything other than a valid String will be known as **
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    InvalidUrlComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard, HardcodedAuthService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
