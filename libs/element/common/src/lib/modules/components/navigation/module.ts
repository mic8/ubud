import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBar } from './navigation.bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UbudElementCommonPipeModule } from '../../pipes/module';

@NgModule({
    declarations: [
        NavigationBar
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        UbudElementCommonPipeModule
    ],
    exports: [
        NavigationBar,
    ]
})
export class UbudElementCommonNavigationBarComponentModule{
}