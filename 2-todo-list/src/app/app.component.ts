import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <todo-form (todoAdded)="addTodo($event)"></todo-form>
    <todo-list [todos]="todos"></todo-list>
  `,
})
export class AppComponent  { 
  title = "Todo List";
  todos: Todo[] = [
    { label: "Bring milk", done: false},
    { label: "Pay bill", done: true},
    { label: "Clean house", done: false}
  ];

  addTodo(label: string) {
    console.log('called', label);
    var t = {label: label, done: false};
    this.todos.push(t);
  }
}
