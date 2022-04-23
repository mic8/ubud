import { AlumniInteractionState } from './alumni-interaction.state';
import { createReducer, Message } from '@ubud/ngrx';
import { ALUMNI_GRADUATE_INTERACTION_MESSAGES } from '../modules/graduate/messages';
import { GraduateManageInteraction } from '../modules/graduate/enums/graduate-manage-interaction';

const INITIAL_STATE: AlumniInteractionState = {
    graduate: {
        index: {
            process: undefined,
            error: undefined,
            success: undefined,
        },
        manage: {
            process: undefined,
            error: undefined,
            success: undefined,
            response: undefined,
            interaction: GraduateManageInteraction.IDLE,
        },
    },
}

export function alumniInteractionReducer(state: AlumniInteractionState = INITIAL_STATE, action: Message<AlumniInteractionState>): AlumniInteractionState {
    const messages: any[] = [
        ...ALUMNI_GRADUATE_INTERACTION_MESSAGES,
    ]; // akan nampung semua command, event, dan document
    
    return createReducer<AlumniInteractionState>(...messages)(state, action); // template 
}
