import { Message, UbudMessage } from '@ubud/ngrx';
import { AlumniState } from '../../../../stores/alumni.state';

@UbudMessage('Alumni.Graduate.FetchGraduates')
export class FetchGraduates extends Message<AlumniState> {
    public params: any; // kalau udah pakai webservice bisa kirim query params misalnya keyword dll
    
    public override handle(state: AlumniState): AlumniState {
        return {
            ...state,
        };
    }
}
