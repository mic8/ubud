import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'ubud-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'], // opsional
    animations: [
        trigger('sidebarAnimation', [
            state('true', style({ left: '0%' })),
            state('false', style({ left: '-25%' })),
            transition('true => false', [animate(300)]),
            transition('false => true', [animate(300)]),
        ]),
        trigger('contentAnimation', [
            state('true', style({ paddingLeft: '25%' })),
            state('false', style({ paddingLeft: '0%' })),
            transition('true => false', [animate(300)]),
            transition('false => true', [animate(300)]),
        ])
    ]
})
export class AppComponent {
    barsIcon = faBars;
    
    expand = true;
    
    cards = [
        {
            title: "What is Angular",
            button_text: "Platform overview"
        },
        {
            title: "Getting started",
            button_text: "Try it now"
        },
        {
            title: "Learn and explore",
            button_text: "Introduction to Angular concepts"
        },
        {
            title: "Set up your environment",
            button_text: "Local setup"
        },
        {
            title: "Hello World",
            button_text: "Tour of Heroes tutorial"
        }
    ]
}
