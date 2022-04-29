import { Message, UbudMessage } from '@ubud/ngrx';
import { TodoState_db } from '../../../../stores/todo.state';
import { Data } from '../../models/todo';

@UbudMessage('Todo.Data.CommentsEntity')
export class CommentsEntity extends Message<TodoState_db> {
    public comments!: Data[];
    
    public override handle(state: TodoState_db): TodoState_db {
        // state.graduate.graduates = this.graduates;
        
        return {
            ...state,
            comment: {
                ...state.comment,
                comments: this.comments,
            },
        };
    }
}
