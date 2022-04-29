import { TodoState_db } from './todo.state';
import { createReducer, Message } from '@ubud/ngrx';
import { MESSAGES } from '../modules/graduate/messages';

const INITIAL_STATE: TodoState_db = {
    comment: {
        comments: undefined, // state
        comment: undefined,
    },
}

export function todoReducer(state: TodoState_db = INITIAL_STATE, action: Message<TodoState_db>): TodoState_db {
    const messages: any[] = [
        ...MESSAGES,
    ]; // akan nampung semua command, event, dan document
    
    return createReducer<TodoState_db>(...messages)(state, action); // template 
}
