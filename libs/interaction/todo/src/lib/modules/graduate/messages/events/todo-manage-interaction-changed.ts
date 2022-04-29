import { Message, UbudMessage } from '@ubud/ngrx';
import { TodoInteractionState } from '../../../../stores/todo-interaction.state';

@UbudMessage('Interaction.Alumni.Graduate.GraduateManageInteractionChanged')
export class TodoManageInteractionChanged extends Message<TodoInteractionState> {
    public changes: any;
    
    public override handle(state: TodoInteractionState): TodoInteractionState {
        return {
            ...state,
            comment: {
                ...state.comment,
                manage: {
                    ...state.comment.manage,
                    ...this.changes,
                },
            },
        };
    }
}
