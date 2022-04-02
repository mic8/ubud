import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { alumniInteractionReducer } from './alumni-interaction.reducer';
import { AlumniInteractionStore } from './alumni-interaction.store';

@NgModule({
    imports: [
        StoreModule.forFeature('alumniInteraction', alumniInteractionReducer),
    ],
    providers: [
        AlumniInteractionStore,
    ], // registry untuk yang sifatnya service -> @Injectable (yang kita mau daftarkan ke dependency injection angular
})
export class UbudInteractionAlumniStoreModule {
}
