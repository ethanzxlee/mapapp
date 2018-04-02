import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Style } from 'mapbox-gl';

import * as campusReducer from '../store/reducers';
import * as campusesSelector from '../store/selectors/campuses.selector';
import * as mapStylesSelector from '../store/selectors/map-styles.selector';

@Component({
    selector: 'uow-map-campus',
    templateUrl: 'campus.component.html',
    styleUrls: ['./campus.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampusComponent implements OnInit, OnDestroy {
    currentMapStyle$: Observable<Style>;

    campusCenter$: Observable<number[]>;

    campusArea$: Observable<any>;

    constructor(private store: Store<campusReducer.CampusReducerState>) {
        this.currentMapStyle$ = this.store.select(mapStylesSelector.currentMapStyleSelector);
        this.campusCenter$ = this.store.select(campusesSelector.currentCampusCenterSelector);
        this.campusArea$ = this.store.select(campusesSelector.currentCampusBoundSelector);
    }

    ngOnInit() {

    }

    ngOnDestroy() {}
}
