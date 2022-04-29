import { CommentsEntity } from './documents/todo-enity';
import { FetchComments } from './commands/fetch-todo';
import { FetchCommentsSucceed } from './events/fetch-todo-success';
import { FetchCommentsFailed } from './events/fetch-todo-failed';

export const MESSAGES: any[] = [
    FetchComments,
    CommentsEntity,
    FetchCommentsSucceed,
    FetchCommentsFailed,
];
