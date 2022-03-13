import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component ({
    selector: 'navbar-component',
    templateUrl: './navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Navbar {

}