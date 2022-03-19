import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ubud-todo-index-page',
    templateUrl: './todo-index.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoIndexPage {
}
