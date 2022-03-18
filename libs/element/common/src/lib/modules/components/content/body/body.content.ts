import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component ({
    selector: 'ubud-element-common-body-content-component',
    templateUrl: './body.content.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyContent {
    @Input() public content!: string;
}