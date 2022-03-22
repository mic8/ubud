import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBar } from './sidebar.nav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        SideBar
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        SideBar,
    ]
})
export class UbudElementCommonSideBarComponentModule{}