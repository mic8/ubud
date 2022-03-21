import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ubud-element-common-navbar-component', // definisi <tag> dari component sesuai yang didefinisikan
    templateUrl: './navbar.html', // isi html dengan file html
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
    @Input() public title!: string;
}
