import { AlumniInteractionState } from './alumni-interaction.state';
import { createReducer, Message } from '@ubud/ngrx';
import { ALUMNI_GRADUATE_INTERACTION_MESSAGES } from '../modules/graduate/messages';

const INITIAL_STATE: AlumniInteractionState = {
    graduate: {
        index: {
            process: undefined,
            error: undefined,
            success: undefined,
        }
    },
}

export function alumniInteractionReducer(state: AlumniInteractionState = INITIAL_STATE, action: Message<AlumniInteractionState>): AlumniInteractionState {
    const messages: any[] = [
        ...ALUMNI_GRADUATE_INTERACTION_MESSAGES,
    ]; // akan nampung semua command, event, dan document
    
    return createReducer<AlumniInteractionState>(...messages)(state, action); // template 
}
