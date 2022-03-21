import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'ubud-element-common-navbar-component', // definisi <tag> dari component sesuai yang didefinisikan
    templateUrl: './navbar.html', // isi html dengan file html
    /*template: `
        <div class="shadow-md p-4 rounded-xl">
            <ng-content></ng-content>
        </div>
    `,*/ // isi html langsung di typescript
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class Navbar {
    sunIcon = faSun;
    twtIcon = faTwitter;
    githubIcon = faGithub;
    ytubeIcon = faYoutube;
}