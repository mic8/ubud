import { Graduate } from '@ubud/domain/alumni';
import { GraduateManageInteraction } from '../modules/graduate/enums/graduate-manage-interaction';

interface GraduateState {
    index: {
        process: boolean | undefined | null;
        error: string | undefined | null;
        success: string | undefined | null;
    };
    manage: {
        process: boolean | undefined | null;
        error: string | undefined | null;
        success: string | undefined | null;
        response: Graduate | undefined | null;
        interaction: GraduateManageInteraction;
    };
}

export interface AlumniInteractionState { // database
    graduate: GraduateState;
}
