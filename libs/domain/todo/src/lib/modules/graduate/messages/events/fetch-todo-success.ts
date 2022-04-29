import { Message, UbudMessage } from '@ubud/ngrx';
import { TodoState_db } from '../../../../stores/todo.state';

@UbudMessage('Todo.Data.FetchCommentsSucceed')
export class FetchCommentsSucceed extends Message<TodoState_db> {
    public override handle(state: TodoState_db): TodoState_db {
        return {
            ...state,
        };
    }
}
