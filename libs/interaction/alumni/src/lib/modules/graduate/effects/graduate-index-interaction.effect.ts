import { Injectable } from '@angular/core';
import { Effects, Message, ubudType } from '@ubud/ngrx';
import { Effect } from '@ngrx/effects';
import { map, Observable } from 'rxjs';
import { FetchGraduates, FetchGraduatesFailed, FetchGraduatesSucceed } from '@ubud/domain/alumni';
import { GraduateIndexInteractionChanged } from '../messages/events/graduate-index-interaction-changed';

@Injectable()
export class GraduateIndexInteractionEffect extends Effects {
    @Effect()
    public fetchGraduates$: Observable<Message> = this.actions$.pipe(
        ubudType(FetchGraduates),
        map(() => new GraduateIndexInteractionChanged({
            changes: {
                process: true, // loading
                error: undefined,
                success: undefined,
            },
        })),
    );
    
    @Effect()
    public fetchGraduatesSucceed$: Observable<Message> = this.actions$.pipe(
        ubudType(FetchGraduatesSucceed),
        map(() => new GraduateIndexInteractionChanged({
            changes: {
                process: false,
                error: undefined,
                success: 'Berhasil fetch',
            },
        })),
    );
    
    @Effect()
    public fetchGraduatesError$: Observable<Message> = this.actions$.pipe(
        ubudType(FetchGraduatesFailed),
        map(() => new GraduateIndexInteractionChanged({
            changes: {
                process: false,
                error: 'Gagal fetch',
                success: undefined,
            },
        })),
    );
}
