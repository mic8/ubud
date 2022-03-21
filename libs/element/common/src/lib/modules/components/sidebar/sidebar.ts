import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'ubud-element-common-sidebar-component', // definisi <tag> dari component sesuai yang didefinisikan
    templateUrl: './sidebar.html', // isi html dengan file html
    /*template: `
        <div class="shadow-md p-4 rounded-xl">
            <ng-content></ng-content>
        </div>
    `,*/ // isi html langsung di typescript
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class Sidebar {
    AngleR = faAngleRight;
}