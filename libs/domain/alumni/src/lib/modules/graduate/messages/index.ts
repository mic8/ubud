import { GraduatesEntity } from './documents/graduates-entity';
import { FetchGraduates } from './commands/fetch-graduates';
import { FetchGraduatesSucceed } from './events/fetch-graduates-succeed';
import { FetchGraduatesFailed } from './events/fetch-graduates-failed';
import { CreateGraduate } from './commands/create-graduate';
import { CreateGraduateSucceed } from './events/create-graduate-succeed';
import { CreateGraduateFailed } from './events/create-graduate-failed';

export const ALUMNI_GRADUATE_MESSAGES: any[] = [
    FetchGraduates,
    GraduatesEntity,
    FetchGraduatesSucceed,
    FetchGraduatesFailed,
    
    CreateGraduate,
    CreateGraduateSucceed,
    CreateGraduateFailed,
];
