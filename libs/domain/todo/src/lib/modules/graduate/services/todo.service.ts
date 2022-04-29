import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Data } from '../models/todo';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
    private comments: any[] = [
        { // object biasa
            // id: Math.random().toString(),
            id: '1',
            tittle: 'Halo',
            created_at: '27-04-2022',
        },
        {
            id: '2',
            tittle: 'Hai',
            created_at: '24-04-2022',
        },
        {
            id: '3',
            tittle: 'Test',
            created_at: '21-04-2022',
        },
    ];

    public getDatas(): Observable<Data[]> {
        return of(this.comments).pipe(
            delay(2000), //efek delay sebelum data di load
            map(response => {
                if (response) {
                    return response.map(item => new Data(item as any));
                }

                return [];
            }),
        );
    }
// public getDatas(): Observable<Data[]> {
//     return of([
//         { // object biasa
//             // id: Math.random().toString(),
//             id: '1',
//             tittle: 'Halo',
//             created_at: Number(new Date()),
//         },
//         {
//             id: '2',
//             tittle: 'Hai',
//             created_at: Number(new Date()),
//         }
//     ]).pipe(
//         delay(2000),
//             map(response => {
//                 if (response) {
//                     return response.map(item => new Data(item as any));
//                 }
                
//                 return [];
//             }),
//         );
//     }
}
