import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Graduate } from '../models/graduate';
import { map } from 'rxjs/operators';
import { GraduateDto } from '../dtos/graduate-dto';

@Injectable()
export class GraduateService {
    private graduates: any[] = [
        { // object biasa
            id: Math.random().toString(),
            graduateYear: '2016',
            name: 'Michael',
        },
        {
            id: Math.random().toString(),
            graduateYear: '2017',
            name: 'Yoksan',
        }
    ];
    
    public getGraduates(): Observable<Graduate[]> {
        return of(this.graduates).pipe(
            delay(2000),
            map(response => {
                if (response) {
                    return response.map(item => new Graduate(item as any));
                }
                
                return [];
            }),
        );
    }
    
    public createGraduate(payload: GraduateDto): Observable<Graduate | null | undefined> {
        const response = {
            id: Math.random().toString(),
            name: payload.name,
            graduateYear: payload.graduateYear,
        };
        
        return of(response).pipe(
            delay(2000),
            map(data => {
                if (data) {
                    return new Graduate(data); // disini lebih utama
                }
                
                return null;
            }),
            tap(graduate => { // Graduate | null
                if (graduate) {
                    this.graduates.push(graduate);
                }
            }),
        );
    }
}
