import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TodoListComponent } from './todo-list.component';
import { TodoFormComponent } from './todo-form.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    TodoListComponent, 
    TodoFormComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
