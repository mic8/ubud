import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar';

@NgModule({
    declarations: [ // declare variablenya -> var a: Sidebar;
        SidebarComponent,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
    ],
    exports: [
        SidebarComponent, // reassign (mengisi variable) -> var a: Sidebar = new Sidebar();
    ],
})
export class Sidebar {}
