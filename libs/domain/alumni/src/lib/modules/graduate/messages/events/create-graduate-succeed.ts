import { Message, UbudMessage } from '@ubud/ngrx';
import { AlumniState } from '../../../../stores/alumni.state';
import { Graduate } from '../../models/graduate';

@UbudMessage('Alumni.Graduate.CreateGraduateSucceed')
export class CreateGraduateSucceed extends Message<AlumniState> {
    public graduate!: Graduate;
    
    public override handle(state: AlumniState): AlumniState {
        return {
            ...state,
        };
    }
}
