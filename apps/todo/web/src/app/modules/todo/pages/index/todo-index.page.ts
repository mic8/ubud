import { ChangeDetectionStrategy, Component, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[ubudTodoIndexTitle]',
})
export class TodoIndexTitleDirective {
    constructor(private el: ElementRef) {
        // this.el.nativeElement.classList.add('text-primary');
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}

@Component({
    selector: 'ubud-todo-index-page',
    templateUrl: './todo-index.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoIndexPage {
}
