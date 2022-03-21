import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar';

@NgModule({
    declarations: [ // declare variablenya -> var a: Sidebar;
        Sidebar,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
    ],
    exports: [
        Sidebar, // reassign (mengisi variable) -> var a: Sidebar = new Sidebar();
    ],
})
export class UbudElementCommonSidebarComponentModule {}
