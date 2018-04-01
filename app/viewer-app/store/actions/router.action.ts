import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] GO';
export const BACK = '[Router] BACK';
export const FORWARD = '[Router] FORWARD';

export class Go implements Action {
    readonly type = GO;
    constructor(
        public payload: {
            path: any[];
            query?: object;
            extras?: NavigationExtras;
        }
    ) {}
}

export class Back implements Action {
    readonly type = BACK;
}

export class Forward implements Action {
    readonly type = FORWARD;
}

export type RouterActions = Go | Back | Forward;
