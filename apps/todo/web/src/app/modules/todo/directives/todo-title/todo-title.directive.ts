import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[ubudTodoTitle]',
})
export class TodoTitleDirective {
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
