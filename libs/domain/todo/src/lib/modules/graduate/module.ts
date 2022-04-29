import { NgModule } from '@angular/core';
import { UbudDomainTodoStoreModule } from '../../stores/module';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from './effects/todo.effect';
import { TodoService } from './services/todo.service';

@NgModule({
    imports: [
        UbudDomainTodoStoreModule,
        EffectsModule.forFeature([
            TodoEffect,
        ]),
    ],
    providers: [
        TodoService,
    ],
})
export class UbudDomainTodoModule {
}
