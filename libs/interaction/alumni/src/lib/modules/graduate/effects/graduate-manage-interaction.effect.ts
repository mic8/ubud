import { Injectable } from '@angular/core';
import { Effects, Message, ubudType } from '@ubud/ngrx';
import { Effect } from '@ngrx/effects';
import { map, Observable } from 'rxjs';
import { CreateGraduate, CreateGraduateFailed, CreateGraduateSucceed } from '@ubud/domain/alumni';
import { GraduateManageInteractionChanged } from '../messages/events/graduate-manage-interaction-changed';
import { GraduateManageInteraction } from '../enums/graduate-manage-interaction';

@Injectable()
export class GraduateManageInteractionEffect extends Effects {
    @Effect()
    public createGraduate$: Observable<Message> = this.actions$.pipe(
        ubudType(CreateGraduate),
        map(() => new GraduateManageInteractionChanged({
            changes: {
                process: true,
                error: null,
                success: null,
                response: null,
                interaction: GraduateManageInteraction.CREATE_EXECUTED,
            },
        })),
    );
    
    @Effect()
    public createGraduateSucceed$: Observable<Message> = this.actions$.pipe(
        ubudType(CreateGraduateSucceed),
        map(({ graduate }) => new GraduateManageInteractionChanged({
            changes: {
                process: false,
                error: null,
                success: 'Berhasil menambahkan data alumni',
                response: graduate,
                interaction: GraduateManageInteraction.CREATE_SUCCEED,
            },
        })),
    );

    @Effect()
    public createGraduateFailed$: Observable<Message> = this.actions$.pipe(
        ubudType(CreateGraduateFailed),
        map(() => new GraduateManageInteractionChanged({
            changes: {
                process: false,
                error: 'Gagal menambahkan data alumni',
                success: null,
                response: null,
                interaction: GraduateManageInteraction.CREATE_FAILED,
            },
        })),
    );
}
