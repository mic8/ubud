import { Message, UbudMessage } from '@ubud/ngrx';
import { AlumniState } from '../../../../stores/alumni.state';
import { Graduate } from '../../models/graduate';

@UbudMessage('Alumni.Graduate.GraduatesEntity')
export class GraduatesEntity extends Message<AlumniState> {
    public graduates!: Graduate[];
    
    public override handle(state: AlumniState): AlumniState {
        // state.graduate.graduates = this.graduates;
        
        return {
            ...state,
            graduate: {
                ...state.graduate,
                graduates: this.graduates,
            },
        };
    }
}
