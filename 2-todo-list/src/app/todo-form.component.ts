import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'todo-form',
    template: `
        <input type="text" #newTodo />
        <button (click)="addTodo(newTodo.value); newTodo.value=''">+</button>
    `
})
export class TodoFormComponent {
    @Output() todoAdded = new EventEmitter();

    addTodo(label: string) {
        this.todoAdded.emit(label);
    }
}