import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BodySidebar } from "./body.navbar";

@NgModule ({
    declarations: [
        BodySidebar
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BodySidebar
    ]
})
export class UbudElementCommonBodySidebarModule {}