import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Card } from "./card";

@NgModule({
    declarations: [
        Card,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        Card,
    ]
})

export class UbudElementCommonCardComponentModule {}