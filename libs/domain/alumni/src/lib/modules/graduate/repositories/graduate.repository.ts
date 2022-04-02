import { Injectable } from '@angular/core';
import { Repository } from '@ubud/ngrx';
import { AlumniState } from '../../../stores/alumni.state';
import { AlumniStore } from '../../../stores/alumni.store';
import { Observable } from 'rxjs';
import { Graduate } from '../models/graduate';

@Injectable()
export class GraduateRepository extends Repository<AlumniState> {
    public constructor(store: AlumniStore) {
        super(store);
    }
    
    public getGraduates$(): Observable<Graduate[] | undefined | null> { // istilahnya untuk get data yang sifatnya evetn stream
        return this.select(state => state.graduate.graduates);
    }
    
    public getGraduate$(): Observable<Graduate | undefined | null> {
        return this.select(state => state.graduate.graduate);
    }
}
