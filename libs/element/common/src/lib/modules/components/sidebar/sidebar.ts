/* eslint-disable @angular-eslint/component-class-suffix */
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
    'Tutorial',
    'Reference'
  ];

  public updatedAt = new Date().toLocaleString('en-GB', { timeZone: 'UTC', timeZoneName: 'short' });
}
