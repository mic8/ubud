import { NgModule } from '@angular/core';
import { UbudInteractionAlumniStoreModule } from '../../stores/module';
import { EffectsModule } from '@ngrx/effects';
import { GraduateIndexInteractionEffect } from './effects/graduate-index-interaction.effect';
import { UbudDomainAlumniGraduateModule } from '@ubud/domain/alumni';
import { GraduateManageInteractionEffect } from './effects/graduate-manage-interaction.effect';

@NgModule({
    imports: [
        UbudInteractionAlumniStoreModule,
        UbudDomainAlumniGraduateModule,
        EffectsModule.forFeature([
            GraduateIndexInteractionEffect,
            GraduateManageInteractionEffect,
        ]),
    ],
})
export class UbudInteractionAlumniGraduateModule {
}
