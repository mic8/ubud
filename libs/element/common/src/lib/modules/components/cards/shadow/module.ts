import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowCard } from './shadow.card';

@NgModule({
    declarations: [ // declare variablenya -> var a: ShadowCard;
        ShadowCard,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
    ],
    exports: [
        ShadowCard, // reassign (mengisi variable) -> var a: ShadowCard = new ShadowCard();
    ],
})
export class UbudElementCommonShadowCardComponentModule {}
