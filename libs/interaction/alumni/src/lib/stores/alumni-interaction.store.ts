import { Injectable } from '@angular/core';
import { Store, UbudStore } from '@ubud/ngrx';
import { AlumniInteractionState } from './alumni-interaction.state';

@Injectable()
@UbudStore('alumniInteraction') // decorator -> ini yang akan melakukan mapping selanjutnya 
export class AlumniInteractionStore extends Store<AlumniInteractionState> {
}
