import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'uow-tab-bar-item',
    template: ``
})
export class TabBarItemComponent implements OnInit {
    @Input() title: string;
    @Input() icon: string;
    @Input() iconSelected: string;

    constructor() {
        console.log('item consstruced');
    }

    ngOnInit(): void {
        console.log('tabbaritem init');
    }
}
