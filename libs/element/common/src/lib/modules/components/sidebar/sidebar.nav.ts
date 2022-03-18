import { ChangeDetectionStrategy,Input,Component } from "@angular/core";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'ubud-element-common-sidebar-element',
    templateUrl: './sidebar.nav.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBar {
    @Input() current!: {status:string};
    
    chevronRight = faChevronRight;
    
    menu_items = [
        {id: 1, name: 'Getting Started'},
        {id: 2, name: 'Understanding Angular'},
        {id: 3, name: 'Developer Guides'},
        {id: 4, name: 'Best Practices'},
        {id: 5, name: 'Angular Tools'},
        {id: 6, name: 'Tutorials'},
        {id: 7, name: 'Release Information'},
        {id: 8, name: 'Reference'},
    ];
    
    item_content = [
        {id: 1, name: 'Hello', item_id: 1},
        {id: 9, name: 'Hello', item_id: 1},
        {id: 2, name: 'Hello 2', item_id: 2},
        {id: 3, name: 'Hello 3', item_id: 3},
        {id: 4, name: 'Hello 4', item_id: 4},
        {id: 5, name: 'Hello 5', item_id: 5},
        {id: 6, name: 'Hello 6', item_id: 6},
        {id: 7, name: 'Hello 7', item_id: 7},
        {id: 8, name: 'Hello 8', item_id: 8},
    ];
    
    @Input() public active = 0;
    
}