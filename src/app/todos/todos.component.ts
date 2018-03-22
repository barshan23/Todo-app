import { Todo } from './../todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {id: 1, text:"This is a todo!", complete:false},
    {id: 2, text:"This is another todo!", complete:false}
  ];
  constructor() { }

  ngOnInit() {
  }

  complete(i:number){
    console.log(i)
    this.todos[i].complete = true;
  }

}
