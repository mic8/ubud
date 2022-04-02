import { AlumniState } from './alumni.state';
import { createReducer, Message } from '@ubud/ngrx';
import { ALUMNI_GRADUATE_MESSAGES } from '../modules/graduate/messages';

const INITIAL_STATE: AlumniState = {
    graduate: {
        graduates: undefined, // state
        graduate: undefined,
    },
}

export function alumniReducer(state: AlumniState = INITIAL_STATE, action: Message<AlumniState>): AlumniState {
    const messages: any[] = [
        ...ALUMNI_GRADUATE_MESSAGES,
    ]; // akan nampung semua command, event, dan document
    
    return createReducer<AlumniState>(...messages)(state, action); // template 
}
