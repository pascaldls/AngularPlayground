import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from './todo' ;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[];

  constructor( private _todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = [] ;
    this._todoService.getTodos()
      .map( res => res )
      .subscribe( (todos) => {
        this.todos = ( todos as any ).data ;
        console.log( this.todos ) ;
      } ) ;
  }

  addTodo( $event, todoText ) {
    const result = this._todoService.saveTodo( {
      task : todoText.value,
      check : false
    } ) ;
    result.subscribe( ( res ) => {
      console.log( res ) ;
      this.todos.push( res as any ) ;
      todoText.value = '' ;
    });

  }
}
