import {Injectable} from '@angular/core';
import {ToDoListItem} from '../models';

@Injectable()
export class ToDoService {
  public TODOLISTMOCK: ToDoListItem[];

  constructor() {
    this.TODOLISTMOCK = [
      {id: 1, name: 'To Do List Item 1', isMarkedAsDone: false},
      {id: 2, name: 'To Do List Item 2', isMarkedAsDone: true}
    ];
  }

  getAllTodos(): ToDoListItem[] {
    return this.TODOLISTMOCK;
  }
}
