import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormComponent, FormState } from '@ubud/form';
import { GraduateDto } from '@ubud/domain/alumni';

@Component({
    selector: 'ubud-element-alumni-graduate-form-web',
    templateUrl: './graduate.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraduateForm extends FormComponent<GraduateDto> {
    @Input() public formState!: FormState<GraduateDto>;
}
