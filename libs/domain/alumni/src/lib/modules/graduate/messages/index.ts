import { GraduatesEntity } from './documents/graduates-entity';
import { FetchGraduates } from './commands/fetch-graduates';
import { FetchGraduatesSucceed } from './events/fetch-graduates-succeed';
import { FetchGraduatesFailed } from './events/fetch-graduates-failed';

export const ALUMNI_GRADUATE_MESSAGES: any[] = [
    FetchGraduates,
    GraduatesEntity,
    FetchGraduatesSucceed,
    FetchGraduatesFailed,
];
