import { Injectable } from '@angular/core';
import { Effects, Message, ubudType } from '@ubud/ngrx';
import { Actions, Effect } from '@ngrx/effects';
import { GraduateService } from '../services/graduate.service';
import { catchError, Observable, of } from 'rxjs';
import { FetchGraduates } from '../messages/commands/fetch-graduates';
import { GraduatesEntity } from '../messages/documents/graduates-entity';
import { FetchGraduatesFailed } from '../messages/events/fetch-graduates-failed';
import { FetchGraduatesSucceed } from '../messages/events/fetch-graduates-succeed';
import { HttpErrorResponse } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class GraduateEffect extends Effects {
    public constructor(actions$: Actions, private service: GraduateService) {
        super(actions$);
    }
    
    @Effect()
    public fetchGraduates$: Observable<Message> = this.actions$.pipe(
        ubudType(FetchGraduates), // handling command FetchGraduates -> loading jalan
        mergeMap(({ params }) => {
            return this.service.getGraduates().pipe(
                /*map(response => {
                    if (response && Array.isArray(response)) {
                        return new GraduatesEntity({
                            graduates: response,
                        }); // raise document entity -> binding ke state
                    }
                    
                    return new FetchGraduatesFailed(); // raise event failed
                }),*/
                mergeMap(response => {
                    if (response && Array.isArray(response)) {
                        return of(
                            new GraduatesEntity({
                                graduates: response,
                            }),
                            new FetchGraduatesSucceed(), // loading berhenti && ini digunakan untuk handling pesan berhasil
                        );
                    }
                    
                    return of(
                        new GraduatesEntity({
                            graduates: null,
                        }),
                        new FetchGraduatesFailed(), // loading berhenti && ini digunakan untuk handling pesan error misalnya
                    );
                }),
                catchError((e: HttpErrorResponse) => of(
                    new GraduatesEntity({ graduates: null }),
                    new FetchGraduatesFailed(),
                )),
            );
        }), // rxjs -> mergeMap, map 
    );
}
