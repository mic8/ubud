import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ubud-element-common-navbar-component',
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  @Input() public items: string[] = [
    'Home',
    'Docs',
    'FAQ'
  ];
}
