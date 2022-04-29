import { TodoInteractionState } from './todo-interaction.state';
import { createReducer, Message } from '@ubud/ngrx';
import { MESSAGES } from '../modules/graduate/messages';
import { TodoManageInteraction } from '../modules/graduate/enums/todo-manage-interaction';

const INITIAL_STATE: TodoInteractionState = {
    comment: {
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
            interaction: TodoManageInteraction.IDLE,
        },
    },
}

export function todoInteractionReducer(state: TodoInteractionState = INITIAL_STATE, action: Message<TodoInteractionState>): TodoInteractionState {
    const messages: any[] = [
        ...MESSAGES,
    ]; // akan nampung semua command, event, dan document
    
    return createReducer<TodoInteractionState>(...messages)(state, action); // template 
}
