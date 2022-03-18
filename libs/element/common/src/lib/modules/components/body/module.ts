import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Body } from './body';

@NgModule({
    declarations: [ // declare variablenya -> var a: ShadowCard;
        Body,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
    ],
    exports: [
        Body, // reassign (mengisi variable) -> var a: ShadowCard = new ShadowCard();
    ],
})
export class BodyComponent {}
