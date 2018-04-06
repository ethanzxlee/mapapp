import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Style } from 'mapbox-gl';

import * as campusReducer from '../store/reducers';
import * as campusesSelector from '../store/selectors/campuses.selector';
import * as mapStylesSelector from '../store/selectors/map-styles.selector';

import { Page } from 'tns-core-modules/ui/page';
import { isIOS, isAndroid, screen } from 'tns-core-modules/platform/platform';
import { ViewBase } from 'tns-core-modules/ui/frame/frame';
import { ios } from 'tns-core-modules/application';

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

    constructor(private store: Store<campusReducer.CampusReducerState>, private page: Page) {
        this.currentMapStyle$ = this.store.select(mapStylesSelector.currentMapStyleSelector);
        this.campusCenter$ = this.store.select(campusesSelector.currentCampusCenterSelector);
        this.campusArea$ = this.store.select(campusesSelector.currentCampusBoundSelector);
        this.page.backgroundSpanUnderStatusBar = true;
        // this.page.backgroundColor = "#ff4545";
        // console.log('page parent', this.page.parent);
        // let cur: ViewBase = this.page;
        // while (cur) {
        //     console.log('currrrr', cur, cur.nativeView);
        //     cur = cur.parent;
        // }
        // console.log('inset_top', ios.window.safeAreaInsets.top)
        // console.log('inset_bottom', ios.window.safeAreaInsets.bottom)
    }

    ngOnInit() {
        // console.log('zx_oninit');
        // if (isIOS) {
        //     // this.page.marginTop = { unit:'dip', value: -20 };
        //     console.log('zx_screen.mainScreen.heightDIPs', screen.mainScreen.heightDIPs);
        //     console.log('zx_view safearea insets top', (this.page.nativeView as UIView).safeAreaInsets.top)
        //     console.log('zx_view safearea insets bottom', (this.page.nativeView as UIView).safeAreaInsets.bottom)
        // } else if (isAndroid) {

        // }
    }

    ngOnDestroy() {}
}
