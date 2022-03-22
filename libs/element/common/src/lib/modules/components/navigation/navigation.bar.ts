import { ChangeDetectionStrategy,Component,Input, Output } from "@angular/core";
import { faBars, faSun } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'ubud-element-common-navigation-bar-component',
    templateUrl : './navigation.bar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBar {
    @Input() icon!: { name: string }
    barsIcon = faBars;
    brightnessIcon = faSun;
    twitterIcon = faTwitter;
    githubIcon = faGithub;
    youtubeIcon = faYoutube;
    
    brandIcons = [this.twitterIcon, this.githubIcon, this.youtubeIcon];
    
    links = ['features', 'docs', 'resources', 'events', 'blog'];
}