import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardContent } from "./card.content";

@NgModule({
    declarations: [
        CardContent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CardContent,
    ],
})

export class UbudElementCommonCardContentComponentModule {}