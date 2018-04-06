import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerElement } from 'nativescript-angular/element-registry';

import { TabBarView } from './views/tab-bar.view';
import { TabBarComponent } from './components/tab-bar.component';

registerElement('uow-tab-bar-view', () => TabBarView);

@NgModule({
    imports: [CommonModule],
    declarations: [TabBarComponent],
    exports: [TabBarComponent]
})
export class TabBarModule {}
