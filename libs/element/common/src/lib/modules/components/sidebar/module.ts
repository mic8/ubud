import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { Sidebar } from './sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        Sidebar,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        Sidebar,
    ]
})
export class UbudElementCommonSidebarComponentModule {}