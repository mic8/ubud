import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';
import { LimitatorPipe } from './limtator.pipe';

const PIPES: any[] = [
    UppercasePipe,
    LimitatorPipe
];

@NgModule({
    declarations: [...PIPES], // spread operator -> UppercasePipe, ...X
    imports: [
        CommonModule,
    ],
    exports: [...PIPES],
})
export class UbudElementCommonPipeModule {}
