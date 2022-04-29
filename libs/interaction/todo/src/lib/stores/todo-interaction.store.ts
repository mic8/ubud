import { Injectable } from '@angular/core';
import { Store, UbudStore } from '@ubud/ngrx';
import { TodoInteractionState } from './todo-interaction.state';

@Injectable()
@UbudStore('todoInteraction') // decorator -> ini yang akan melakukan mapping selanjutnya 
export class TodoInteractionStore extends Store<TodoInteractionState> {
}
