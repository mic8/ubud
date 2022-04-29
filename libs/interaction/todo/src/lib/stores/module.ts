import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { todoInteractionReducer } from './todo-interaction.reducer';
import { TodoInteractionStore } from './todo-interaction.store';

@NgModule({
    imports: [
        StoreModule.forFeature('todoInteraction', todoInteractionReducer),
    ],
    providers: [
        TodoInteractionStore,
    ], // registry untuk yang sifatnya service -> @Injectable (yang kita mau daftarkan ke dependency injection angular
})
export class UbudInteractionTodoStoreModule {
}
