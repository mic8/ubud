import { Component, Input } from '@angular/core';

@Component({
  selector: 'ubud-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // opsional
})
export class AppComponent {
  @Input() public cards = [
    {
      title: 'Lorem Ipsum',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam sint.',
    },
    {
      title: 'Lorem Ipsum',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam sint.',
    },
  ];
}
