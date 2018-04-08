import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerElement } from 'nativescript-angular/element-registry';

import { TabBarView } from './views/tab-bar.view';
import * as components from './components';

registerElement('uow-tab-bar-view', () => TabBarView);

@NgModule({
    imports: [CommonModule],
    declarations: [components.TabBarComponent, components.TabBarItemComponent],
    exports: [components.TabBarComponent, components.TabBarItemComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabBarModule {}
