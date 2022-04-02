import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Graduate } from '../models/graduate';
import { map } from 'rxjs/operators';

@Injectable()
export class GraduateService {
    public getGraduates(): Observable<Graduate[]> {
        return of([
            { // object biasa
                id: '1',
                graduateYear: '2016',
                name: 'Michael',
            },
            {
                id: '2',
                graduateYear: '2017',
                name: 'Yoksan',
            }
        ]).pipe(
            delay(2000),
            map(response => {
                if (response) {
                    return response.map(item => new Graduate(item as any));
                }
                
                return [];
            }),
        );
    }
}
