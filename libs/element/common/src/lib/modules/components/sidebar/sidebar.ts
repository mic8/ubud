import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ubud-element-common-sidebar-component',
  templateUrl: './sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  @Input() public active = 0;
  @Input() public items: string[] = [
    'Introduction',
    'Why Angular?',
    'Tutorial',
    'Reference'
  ];
}
