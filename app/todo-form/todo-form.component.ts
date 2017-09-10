import { Component } from '@angular/core';
import { TodoService } from '../shared/todo.service';
@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']

})

export class TodoFormComponent {
    
    title: string =  '';
    newTitle: string = ''
    constructor(private todoService: TodoService)  {}

    onSubmit(){ 
        this.todoService.createTodo(this.newTitle);
        console.log(this.todoService.getTodos());
    }
}