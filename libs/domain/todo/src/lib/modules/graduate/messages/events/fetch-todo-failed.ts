import { Message, UbudMessage } from '@ubud/ngrx';
import { TodoState_db } from '../../../../stores/todo.state';

@UbudMessage('Todo.Data.FetchCommentsFailed')
export class FetchCommentsFailed extends Message<TodoState_db> {
    public override handle(state: TodoState_db): TodoState_db {
        return {
            ...state,
        };
    }
}
