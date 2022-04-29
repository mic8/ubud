import { Injectable } from '@angular/core';
import { Store, UbudStore } from '@ubud/ngrx';
import { TodoState_db } from './todo.state';

@Injectable()
@UbudStore('data') // decorator -> ini yang akan melakukan mapping selanjutnya 
export class TodoStore extends Store<TodoState_db> {
}
