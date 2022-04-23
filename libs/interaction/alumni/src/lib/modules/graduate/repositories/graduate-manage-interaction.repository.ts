import { Injectable } from '@angular/core';
import { Repository } from '@ubud/ngrx';
import { AlumniInteractionState } from '../../../stores/alumni-interaction.state';
import { AlumniInteractionStore } from '../../../stores/alumni-interaction.store';
import { Observable } from 'rxjs';
import { Graduate } from '@ubud/domain/alumni';

@Injectable()
export class GraduateManageInteractionRepository extends Repository<AlumniInteractionState> {
    public constructor(store: AlumniInteractionStore) {
        super(store);
    }
    
    public isProcess$(): Observable<boolean | undefined | null> {
        return this.select(state => state.graduate.manage.process);
    }
    
    public getError$(): Observable<string | undefined | null> {
        return this.select(state => state.graduate.manage.error);
    }
    
    public getSuccess$(): Observable<string | undefined | null> {
        return this.select(state => state.graduate.manage.success);
    }
    
    public getInteraction$(): Observable<string | undefined | null> {
        return this.select(state => state.graduate.manage.interaction);
    }
    
    public getResponse$(): Observable<Graduate | undefined | null> {
        return this.select(state => state.graduate.manage.response);
    }
}
