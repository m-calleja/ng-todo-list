import {Component, OnInit} from '@angular/core';
import {ToDoService} from './services/todo.service';
import {ToDoListItem} from './models/ToDoListItem';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public isAddNewFormVisible = false;
  public todoList: ToDoListItem[];
  public todoRequest: FormGroup;

  constructor(private todoService: ToDoService, private _fb: FormBuilder) {
    //
  }

  public ngOnInit() {
    this.todoRequest = this._fb.group({
      id: [''],
      name: [''],
      isMarkedAsDone: [false]
    });
    this.getAll();
  }

  getAll() {
    this.todoList = this.todoService.getAllTodos();
    console.log(this.todoList);
  }

  addNewTodo() {
    let val = this.todoRequest.value as ToDoListItem;
    val.id = this.todoList.length + 1;
    this.todoList.push(new ToDoListItem(val.id, val.name, val.isMarkedAsDone));
    console.log(this.todoList);
    this.todoRequest.reset();
    this.isAddNewFormVisible = false;
  }

  markAsDone(id: number, isCompleted: boolean) {
    this.todoList.map(td => {
      if (td.id === id) {
        td.isMarkedAsDone = isCompleted;
      }
    });
    console.log(this.todoList);
  }

  deleteTodo(id) {
    let agree = confirm('Are You Sure You Want To Delete This Item');
    if (agree) {
      this.todoList.splice(this.todoList.findIndex(td => td.id === id), 1);
    } else {
      return true;
    }
    console.log(this.todoList);
  }
}
