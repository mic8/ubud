import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';
import { ExcerptPipe } from './excerpt.pipe';

const PIPES: any[] = [
    UppercasePipe,
    ExcerptPipe
];

@NgModule({
    declarations: [...PIPES], // spread operator -> UppercasePipe, ...X
    imports: [
        CommonModule,
    ],
    exports: [...PIPES],
})
export class UbudElementCommonPipeModule {}
