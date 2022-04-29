import { Injectable } from '@angular/core';
import { Repository } from '@ubud/ngrx';
import { TodoInteractionState } from '../../../stores/todo-interaction.state';
import { TodoInteractionStore } from '../../../stores/todo-interaction.store';
import { Observable } from 'rxjs';
import { Data } from '@ubud/domain/todo';

@Injectable()
export class TodoManageInteractionRepository extends Repository<TodoInteractionState> {
    public constructor(store: TodoInteractionStore) {
        super(store);
    }
    
    public isProcess$(): Observable<boolean | undefined | null> {
        return this.select(state => state.comment.manage.process);
    }
    
    public getError$(): Observable<string | undefined | null> {
        return this.select(state => state.comment.manage.error);
    }
    
    public getSuccess$(): Observable<string | undefined | null> {
        return this.select(state => state.comment.manage.success);
    }
    
    public getInteraction$(): Observable<string | undefined | null> {
        return this.select(state => state.comment.manage.interaction);
    }
    
    public getResponse$(): Observable<Data | undefined | null> {
        return this.select(state => state.comment.manage.response);
    }
}
