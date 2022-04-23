import { Message, UbudMessage } from '@ubud/ngrx';
import { AlumniState } from '../../../../stores/alumni.state';
import { GraduateDto } from '../../dtos/graduate-dto';

@UbudMessage('Alumni.Graduate.CreateGraduate')
export class CreateGraduate extends Message<AlumniState> {
    public payload!: GraduateDto; // not annotation
    
    public override handle(state: AlumniState): AlumniState {
        return {
            ...state,
        };
    }
}
