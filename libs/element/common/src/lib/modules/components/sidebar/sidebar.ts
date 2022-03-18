import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ubud-element-common-sidebar-component',
    templateUrl: './sidebar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Sidebar {
    @Input() public items: string[] = [
        'Introduction',
        'Getting Started',
        'Understanding Angular',
        'Developer Guides',
        'Best Practices',
        'Angular Tools',
        'Tutorials',
        'Release Information',
        'Reference'
    ];
}
