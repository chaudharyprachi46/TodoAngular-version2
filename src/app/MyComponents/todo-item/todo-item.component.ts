import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


  constructor(){
  }

  onDeleteClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("deleteTodo has been trigged");
  }

  onCheckBoxClick(todo: Todo){
    console.log(todo+"in checkbox");
    this.todoCheckbox.emit(todo);
    console.log(todo+"in checkbox");
  }

}
