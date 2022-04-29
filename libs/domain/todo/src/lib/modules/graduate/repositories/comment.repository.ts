import { Injectable } from '@angular/core';
import { Repository } from '@ubud/ngrx';
import { TodoState_db } from '../../../stores/todo.state';
import { TodoStore } from '../../../stores/todo.store';
import { Observable } from 'rxjs';
import { Data } from '../models/todo';

@Injectable()
export class CommentRepository extends Repository<TodoState_db> {
    public constructor(store: TodoStore) {
        super(store);
    }
    
    public getDatas$(): Observable<Data[] | undefined | null> { // istilahnya untuk get data yang sifatnya evetn stream
        return this.select(state => state.comment.comments);
    }
    
    public getData$(): Observable<Data | undefined | null> {
        return this.select(state => state.comment.comment);
    }
}
