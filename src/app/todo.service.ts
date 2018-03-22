import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  todos: Todo[];

  constructor(private http: HttpService) {
    
  }
  public get(){

  } 
}
