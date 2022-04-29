import { Data } from '../modules/graduate/models/todo';

interface TodoState {
    comments: Data[] | undefined | null; // list / daftar > 1 entity 
    comment: Data | undefined | null; // single item
}

export interface TodoState_db { // database
    comment: TodoState;
}
//sebagai database