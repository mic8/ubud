import { NgModule } from '@angular/core';
import { UbudDomainAlumniStoreModule } from '../../stores/module';
import { EffectsModule } from '@ngrx/effects';
import { GraduateEffect } from './effects/graduate.effect';
import { GraduateService } from './services/graduate.service';

@NgModule({
    imports: [
        UbudDomainAlumniStoreModule,
        EffectsModule.forFeature([
            GraduateEffect,
        ]),
    ],
    providers: [
        GraduateService,
    ],
})
export class UbudDomainAlumniGraduateModule {
}
