import { Message, UbudMessage } from '@ubud/ngrx';
import { AlumniState } from '../../../../stores/alumni.state';

@UbudMessage('Alumni.Graduate.FetchGraduatesSucceed')
export class FetchGraduatesSucceed extends Message<AlumniState> {
    public override handle(state: AlumniState): AlumniState {
        return {
            ...state,
        };
    }
}
