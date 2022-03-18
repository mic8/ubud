import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';

const PIPES: any[] = [
    UppercasePipe,
];

@NgModule({
    declarations: [...PIPES], // spread operator -> UppercasePipe, ...X
    imports: [
        CommonModule,
    ],
    exports: [...PIPES],
})
export class UbudElementCommonPipeModule {}