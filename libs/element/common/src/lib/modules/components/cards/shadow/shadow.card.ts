/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ubud-element-common-shadow-card-component', // definisi <tag> dari component sesuai yang didefinisikan
    templateUrl: './shadow.card.html', // isi html dengan file html
    /*template: `
        <div class="shadow-md p-4 rounded-xl">
            <ng-content></ng-content>
        </div>
    `,*/ // isi html langsung di typescript
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShadowCard {
    @Input() public title!: string;
}
