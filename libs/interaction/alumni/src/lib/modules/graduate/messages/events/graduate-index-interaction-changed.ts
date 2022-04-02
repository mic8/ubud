import { Message, UbudMessage } from '@ubud/ngrx';
import { AlumniInteractionState } from '../../../../stores/alumni-interaction.state';

@UbudMessage('Interaction.Alumni.Graduate.GraduateIndexInteractionChanged')
export class GraduateIndexInteractionChanged extends Message<AlumniInteractionState> {
    public changes: any;
    
    public override handle(state: AlumniInteractionState): AlumniInteractionState {
        return {
            ...state,
            graduate: {
                ...state.graduate,
                index: {
                    ...state.graduate.index,
                    ...this.changes,
                },
            },
        };
    }
}
