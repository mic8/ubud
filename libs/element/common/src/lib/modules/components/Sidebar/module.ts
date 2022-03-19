import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar';

@NgModule({
    declarations: [SidebarComponent],
    imports: [CommonModule],
    exports: [SidebarComponent],
})
export class UbudElementCommonSidebarComponentModule {}
