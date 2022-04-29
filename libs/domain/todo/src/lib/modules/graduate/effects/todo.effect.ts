import { Injectable } from '@angular/core';
import { Effects, Message, ubudType } from '@ubud/ngrx';
import { Actions, Effect } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { catchError, Observable, of } from 'rxjs';
import { FetchComments } from '../messages/commands/fetch-todo';
import { CommentsEntity } from '../messages/documents/todo-enity';
import { FetchCommentsFailed } from '../messages/events/fetch-todo-failed';
import { FetchCommentsSucceed } from '../messages/events/fetch-todo-success';
import { HttpErrorResponse } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Data } from '../models/todo';

@Injectable()
export class TodoEffect extends Effects {
    public constructor(actions$: Actions, private service: TodoService) {
        super(actions$);
    }
    
    @Effect()
    public fetchComments$: Observable<Message> = this.actions$.pipe(
        ubudType(FetchComments), // handling command FetchGraduates -> loading jalan
        mergeMap(({ params }) => {
            return this.service.getDatas().pipe(
                mergeMap(response => {
                    if (response && Array.isArray(response)) {
                        return of(
                            new CommentsEntity({
                                comments: response,
                            }),
                            new FetchCommentsSucceed(), // loading berhenti && ini digunakan untuk handling pesan berhasil
                        );
                    }
                    
                    return of(
                        new CommentsEntity({
                            comments: null,
                        }),
                        new FetchCommentsFailed(), // loading berhenti && ini digunakan untuk handling pesan error misalnya
                    );
                }),
                catchError((e: HttpErrorResponse) => of(
                    new CommentsEntity({ comments: null }),
                    new FetchCommentsFailed(),
                )),
            );
        }), // rxjs -> mergeMap, map 
    );
}
