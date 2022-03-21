import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ubud-element-common-sidebar-component', // definisi <tag> dari component sesuai yang didefinisikan
    templateUrl: './sidebar.html', // isi html dengan file html
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
    @Input() public title!: string;
}
