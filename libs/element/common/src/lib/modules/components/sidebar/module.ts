import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SideBar } from "./sidebar";


@NgModule({
    declarations: [
        SideBar,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SideBar,
    ],
})

export class UbudElementCommonSidebarComponentModule {}