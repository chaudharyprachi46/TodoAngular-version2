import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    todos: Todo[];
    localItem: string;
    finishedList: Todo[] = [];

    constructor(){
      this.localItem = localStorage.getItem("todos") ?? "[]";
      this.todos = this.localItem === null ? [] : JSON.parse(this.localItem);
    }

    onTodoDelete(todo: Todo){
      console.log(todo);
       const index = this.todos.indexOf(todo);
       this.todos.splice(index,1);
       localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    addTodo(todo:Todo){
      console.log(todo);
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    toggleTodo(todo: Todo){
      const index = this.todos.indexOf(todo);
      this.todos[index].active = !this.todos[index].active;
      localStorage.setItem("todos", JSON.stringify(this.todos));
      console.log(this.todos[index].active);

      // if(this.todos[index].active===false){
      //   const i = this.todos.indexOf(this.todos[index]);
      //   console.log(i);
      //   const item = this.todos.splice(i,1);
      //   this.finishedList.push(item[0]);
      // }
    }
  
}
