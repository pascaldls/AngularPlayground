import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router' ;
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ItemsService } from './services/items.service' ;
import { AuthService } from './services/auth.service';
import { ItemsComponent } from './items/items.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { GitHubService } from './services/git-hub.service';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ItemsComponent,
    NavBarComponent,
    GitProfileComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot( appRoutes ) ,
  ],
  providers: [
    ItemsService,
    AuthService,
    GitHubService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
