import { Injectable } from '@angular/core';
import { Form, FormFactory } from '@ubud/form';
import { FormBuilder } from '@angular/forms';
import { GraduateRule } from '../rules/graduate.rule';

@Injectable()
export class GraduateFormFactory implements FormFactory {
    public constructor(private fb: FormBuilder) {
    }
    
    public create(): Form {
        const formRule = new GraduateRule();
        
        return {
            formGroup: this.fb.group(formRule.getFormControls()), // untuk grouping formnya
            rules: [formRule],
        };
    }
}
