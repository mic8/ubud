import { ErrorMessages, Rule } from '@ubud/form';
import { ValidatorFn, Validators } from '@angular/forms';

export class GraduateRule extends Rule {
    public get errorMessages(): ErrorMessages { // property
        return {
            name: {
                required: () => 'Nama tidak boleh kosong',
            },
            graduateYear: {
                required: () => 'Tahun kelulusan tidak boleh kosong',
                min: () => 'Tahun kelulusan minimal di tahun 2010',
                max: () => 'Tahun kelulusan maksimal di tahun 2022',
            }
        };
    }
    
    public get name(): ValidatorFn[] {
        return [
            Validators.required, // wajib tidak boleh kosong
        ];
    }
    
    public get graduateYear(): ValidatorFn[] {
        return [
            Validators.required,
            Validators.min(2010),
            Validators.max(2022),
        ];
    }

    public getFormControls(): { [p: string]: any } {
        return {
            name: ['', this.name],
            graduateYear: ['', this.graduateYear],
        };
    }
}
