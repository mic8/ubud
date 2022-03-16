import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component ({
    selector: 'sidebar-component',
    templateUrl: './sidebar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Sidebar {

}