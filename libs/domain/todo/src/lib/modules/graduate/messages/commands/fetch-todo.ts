import { Message, UbudMessage } from '@ubud/ngrx';
import { TodoState_db } from '../../../../stores/todo.state';

@UbudMessage('Todo.Data.FetchComments')
export class FetchComments extends Message<TodoState_db> {
    public params: any; // kalau udah pakai webservice bisa kirim query params misalnya keyword dll
    
    public override handle(state: TodoState_db): TodoState_db {
        return {
            ...state,
        };
    }
}
