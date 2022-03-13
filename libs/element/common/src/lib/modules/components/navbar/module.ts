import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Navbar } from "./navbar";

@NgModule ({
    declarations: [
        Navbar,
    ],
    imports: [
        CommonModule, 
    ],
    
    exports: [
        Navbar,
    ],

})

export class NavbarComponent {

}