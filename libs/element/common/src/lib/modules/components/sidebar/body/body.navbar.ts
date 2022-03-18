import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component ({
    selector: 'ubud-element-common-body-sidebar-component',
    templateUrl: './body.sidebar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodySidebar {
    @Input() public text!: string;
}