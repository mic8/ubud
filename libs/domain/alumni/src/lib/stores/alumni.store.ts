import { Injectable } from '@angular/core';
import { Store, UbudStore } from '@ubud/ngrx';
import { AlumniState } from './alumni.state';

@Injectable()
@UbudStore('alumni') // decorator -> ini yang akan melakukan mapping selanjutnya 
export class AlumniStore extends Store<AlumniState> {
}
