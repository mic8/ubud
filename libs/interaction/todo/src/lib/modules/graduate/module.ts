import { NgModule } from '@angular/core';
import { UbudInteractionTodoStoreModule } from '../../stores/module';
import { EffectsModule } from '@ngrx/effects';
import { TodoIndexInteractionEffect } from './effects/todo-index-interaction.effect';
import { UbudDomainTodoModule } from '@ubud/domain/todo';

@NgModule({
    imports: [
        UbudInteractionTodoStoreModule,
        UbudDomainTodoModule,
        EffectsModule.forFeature([
            TodoIndexInteractionEffect,
        ]),
    ],
})
export class UbudInteractionTodoModule {
}
