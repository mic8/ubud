import { Graduate } from '../modules/graduate/models/graduate';

interface GraduateState {
    graduates: Graduate[] | undefined | null; // list / daftar graduate entity 
    graduate: Graduate | undefined | null; // single item of graduate
}

export interface AlumniState { // database
    graduate: GraduateState;
}
