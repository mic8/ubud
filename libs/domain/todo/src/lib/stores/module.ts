import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { TodoStore } from './todo.store';

@NgModule({
    imports: [
        StoreModule.forFeature('todo', todoReducer),
    ],
    providers: [
        TodoStore,
    ], // registry untuk yang sifatnya service -> @Injectable (yang kita mau daftarkan ke dependency injection angular
})
export class UbudDomainTodoStoreModule {
}
