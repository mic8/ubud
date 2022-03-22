import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Navbar } from "./navbar";
import { UbudElementCommonPipeModule } from "../../pipes/module";

@NgModule({
    declarations: [
        Navbar,
    ],
    imports: [
        CommonModule,
        UbudElementCommonPipeModule
    ],
    exports: [
        Navbar,
    ]
})

export class UbudElementCommonNavbarComponentModule {

}