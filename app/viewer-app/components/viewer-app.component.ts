import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppReducer from '../store/reducers';
import * as CampusSelector from '../../modules/campus-viewer/store/selectors/campuses.selector';
import { mapboxTokenValueSelector } from '../store';

@Component({
  selector: 'uow-map-viewer-app',
  templateUrl: './viewer-app.component.html'
})
export class ViewerAppComponent implements OnInit {

    constructor(private store: Store<AppReducer.RootState>) {}

    ngOnInit() {
        this.store.select(mapboxTokenValueSelector).subscribe(x => console.log('bbbbb-', x))
    }

}
