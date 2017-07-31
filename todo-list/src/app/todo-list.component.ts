import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [
        './todo-list.component.css'
    ]
})
export class TodoListComponent {
    @Input() todos: Todo[];

    toggle(todo: Todo) {
        todo.done = !todo.done;
    }
}
