import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { sidebar } from "./sidebar";

@NgModule ({
    declarations: [
        sidebar,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        sidebar,
    ]
})

export class UbudElementCommonSidebarComponentModule {
    
}