import { Data } from '@ubud/domain/todo';
import { TodoManageInteraction } from '../modules/graduate/enums/todo-manage-interaction';

interface TodoState {
    index: {
        process: boolean | undefined | null;
        error: string | undefined | null;
        success: string | undefined | null;
    };
    manage: {
        process: boolean | undefined | null;
        error: string | undefined | null;
        success: string | undefined | null;
        response: Data | undefined | null;
        interaction: TodoManageInteraction;
    };
}

export interface TodoInteractionState { // database
    comment: TodoState;
}
