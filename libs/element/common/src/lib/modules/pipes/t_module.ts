import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';

const PIPES: any[] = [
    TruncatePipe,
];

@NgModule({
    declarations: [...PIPES], // spread operator -> UppercasePipe, ...X
    imports: [
        CommonModule,
    ],
    exports: [...PIPES],
})
export class TruncateModule {}
