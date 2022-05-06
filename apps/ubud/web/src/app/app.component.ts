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
      value: 'Duis laboris nostrud reprehenderit et est. Ex commodo fugiat laboris cupidatat occaecat in deserunt. Minim in ex consectetur voluptate ad excepteur sunt duis id laborum consequat non excepteur. Elit consectetur consequat duis adipisicing duis eiusmod eiusmod reprehenderit nisi laborum Lorem nulla. Est consectetur veniam adipisicing culpa qui id sint sunt dolor ullamco enim velit labore. Fugiat laborum culpa eiusmod adipisicing ad Lorem incididunt dolor dolore nostrud consectetur. Ad minim pariatur et enim.',
    },
    {
      title: 'Lorem Ipsum',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam sint.',
    },
  ];
}
