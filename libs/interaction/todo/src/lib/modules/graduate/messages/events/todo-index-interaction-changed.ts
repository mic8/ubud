import { Message, UbudMessage } from '@ubud/ngrx';
import { TodoInteractionState } from '../../../../stores/todo-interaction.state';

@UbudMessage('Interaction.Todo.TodoIndexInteractionChanged')
export class TodoIndexInteractionChanged extends Message<TodoInteractionState> {
    public changes: any;
    
    public override handle(state: TodoInteractionState): TodoInteractionState {
        return {
            ...state,
            comment: {
                ...state.comment,
                index: {
                    ...state.comment.index,
                    ...this.changes,
                },
            },
        };
    }
}
