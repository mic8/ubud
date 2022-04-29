import { Injectable } from '@angular/core';
import { Effects, Message, ubudType } from '@ubud/ngrx';
import { Effect } from '@ngrx/effects';
import { map, Observable } from 'rxjs';
import { FetchComments, FetchCommentsFailed, FetchCommentsSucceed } from '@ubud/domain/todo';
import { TodoIndexInteractionChanged } from '../messages/events/todo-index-interaction-changed';

@Injectable()
export class TodoIndexInteractionEffect extends Effects {
    @Effect()
    public fetchComments$: Observable<Message> = this.actions$.pipe(
        ubudType(FetchComments),
        map(() => new TodoIndexInteractionChanged({
            changes: {
                process: true, // loading
                error: undefined,
                success: undefined,
            },
        })),
    );
    
    @Effect()
    public fetchCommentsSucceed$: Observable<Message> = this.actions$.pipe(
        ubudType(FetchCommentsSucceed),
        map(() => new TodoIndexInteractionChanged({
            changes: {
                process: false,
                error: undefined,
                success: 'Berhasil fetch',
            },
        })),
    );
    
    @Effect()
    public fetchCommentsError$: Observable<Message> = this.actions$.pipe(
        ubudType(FetchCommentsFailed),
        map(() => new TodoIndexInteractionChanged({
            changes: {
                process: false,
                error: 'Gagal fetch',
                success: undefined,
            },
        })),
    );
}
