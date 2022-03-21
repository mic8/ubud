import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercasePipe } from './uppercase.pipe';
import { TruncatePipe } from './truncate.pipe';

const PIPES: any[] = [
    TruncatePipe,
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
