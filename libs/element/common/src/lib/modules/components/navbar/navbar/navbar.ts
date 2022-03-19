import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'navbar-element', // definisi <tag> dari component sesuai yang didefinisikan
    templateUrl: './navbar.html', // isi html dengan file html
    /*template: `
        <div class="shadow-md p-4 rounded-xl">
            <ng-content></ng-content>
        </div>
    `,*/ // isi html langsung di typescript
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    @Input() public title!: string;
    @Input() icon!: { name: string }
    SunIcon = faSun;
    brightnessIcon = faSun;
    twitterIcon = faTwitter;
    githubIcon = faGithub;
    youtubeIcon = faYoutube;
}
