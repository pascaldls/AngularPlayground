import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ItemsComponent } from './items/items.component';
import { Routes } from '@angular/router/src/config';
import { HomeComponent } from './home/home.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { TodoComponent } from './todo/todo.component';

export const appRoutes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'login',
    component: FormComponent
  },
  {
    path : 'items',
    component : ItemsComponent
  },
  {
    path : 'gitProfile',
    component : GitProfileComponent
  },
  {
    path : 'todo',
    component : TodoComponent
  }
];
