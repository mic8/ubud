import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { alumniReducer } from './alumni.reducer';
import { AlumniStore } from './alumni.store';

@NgModule({
    imports: [
        StoreModule.forFeature('alumni', alumniReducer),
    ],
    providers: [
        AlumniStore,
    ], // registry untuk yang sifatnya service -> @Injectable (yang kita mau daftarkan ke dependency injection angular
})
export class UbudDomainAlumniStoreModule {
}
