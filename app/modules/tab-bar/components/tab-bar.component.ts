import { Component, ContentChildren, QueryList, AfterViewInit } from '@angular/core';

import { TabBarItemComponent } from './tab-bar-item.component';

@Component({
    selector: 'uow-tab-bar',
    templateUrl: './tab-bar.component.html'
})
export class TabBarComponent implements AfterViewInit {
    @ContentChildren(TabBarItemComponent) items: QueryList<TabBarItemComponent>;

    constructor() {
        console.log('tabbar!!!');
    }

    ngAfterViewInit() {
        console.log('after init');
        console.log(this.items.length);
    }
}
