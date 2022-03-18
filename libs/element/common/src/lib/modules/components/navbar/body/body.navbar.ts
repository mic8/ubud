import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'ubud-element-common-body-navbar-component',
    templateUrl: './body.navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyNavbar {
    @Input() public title!: string;
}