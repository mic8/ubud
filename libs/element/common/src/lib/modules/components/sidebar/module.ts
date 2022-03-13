import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Sidebar } from "./sidebar";

@NgModule ({
    declarations: [
        Sidebar,
    ],
    imports: [
        CommonModule, 
    ],
    
    exports: [
        Sidebar,
    ],

})

export class SidebarComponent {

}