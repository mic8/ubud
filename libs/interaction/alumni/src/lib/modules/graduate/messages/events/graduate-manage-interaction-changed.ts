import { Message, UbudMessage } from '@ubud/ngrx';
import { AlumniInteractionState } from '../../../../stores/alumni-interaction.state';

@UbudMessage('Interaction.Alumni.Graduate.GraduateManageInteractionChanged')
export class GraduateManageInteractionChanged extends Message<AlumniInteractionState> {
    public changes: any;
    
    public override handle(state: AlumniInteractionState): AlumniInteractionState {
        return {
            ...state,
            graduate: {
                ...state.graduate,
                manage: {
                    ...state.graduate.manage,
                    ...this.changes,
                },
            },
        };
    }
}
