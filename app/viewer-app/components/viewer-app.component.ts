import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppReducer from '../store/reducers';
import * as CampusSelector from '../../modules/campus-viewer/store/selectors/campuses.selector';
import { mapboxTokenValueSelector } from '../store';

import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'uow-map-viewer-app',
  templateUrl: './viewer-app.component.html'
})
export class ViewerAppComponent implements OnInit {

    constructor(private store: Store<AppReducer.RootState>, private page: Page) {}

    ngOnInit() {
        this.page.actionBarHidden = true;
        // this.page.backgroundColor = '#0c2340';
        // this.page.backgroundSpanUnderStatusBar = true;
        // this.page.statusBarStyle = 'dark';
    }

}
