import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'body-component', // definisi <tag> dari component sesuai yang didefinisikan
    templateUrl: './body.html', // isi html dengan file html
    /*template: `
        <div class="shadow-md p-4 rounded-xl">
            <ng-content></ng-content>
        </div>
    `,*/ // isi html langsung di typescript
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Body {
    @Input() public title!: string;
}
