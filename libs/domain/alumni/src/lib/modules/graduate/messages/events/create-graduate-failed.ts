import { Message, UbudMessage } from '@ubud/ngrx';
import { AlumniState } from '../../../../stores/alumni.state';

@UbudMessage('Alumni.Graduate.CreateGraduateFailed')
export class CreateGraduateFailed extends Message<AlumniState> {
    public override handle(state: AlumniState): AlumniState {
        return {
            ...state,
        };
    }
}
