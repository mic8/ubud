import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'ubud-element-common-card-component',
    templateUrl: './card.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
}