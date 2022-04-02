import { Injectable } from '@angular/core';
import { Repository } from '@ubud/ngrx';
import { AlumniInteractionState } from '../../../stores/alumni-interaction.state';
import { AlumniInteractionStore } from '../../../stores/alumni-interaction.store';
import { Observable } from 'rxjs';

@Injectable()
export class GraduateIndexInteractionRepository extends Repository<AlumniInteractionState> {
    public constructor(store: AlumniInteractionStore) {
        super(store);
    }
    
    public isProcess$(): Observable<boolean | undefined | null> {
        return this.select(state => state.graduate.index.process);
    }
    
    public getError$(): Observable<string | undefined | null> {
        return this.select(state => state.graduate.index.error);
    }
    
    public getSuccess$(): Observable<string | undefined | null> {
        return this.select(state => state.graduate.index.success);
    }
}
