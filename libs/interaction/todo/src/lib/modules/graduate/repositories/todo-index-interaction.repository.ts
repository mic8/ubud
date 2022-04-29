import { Injectable } from '@angular/core';
import { Repository } from '@ubud/ngrx';
import { TodoInteractionState } from '../../../stores/todo-interaction.state';
import { TodoInteractionStore } from '../../../stores/todo-interaction.store';
import { Observable } from 'rxjs';

@Injectable()
export class TodoIndexInteractionRepository extends Repository<TodoInteractionState> {
    public constructor(store: TodoInteractionStore) {
        super(store);
    }
    
    public isProcess$(): Observable<boolean | undefined | null> {
        return this.select(state => state.comment.index.process);
    }
    
    public getError$(): Observable<string | undefined | null> {
        return this.select(state => state.comment.index.error);
    }
    
    public getSuccess$(): Observable<string | undefined | null> {
        return this.select(state => state.comment.index.success);
    }
}
