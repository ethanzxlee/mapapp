import { Action } from '@ngrx/store';

export const SET_READ_DISCLAIMER = '[Setting] SET_READ_DISCLAIMER';
export const SET_LAST_CAMPUS_ID = '[Setting] SET_LAST_CAMPUS_ID';
export const SHOW_DISCLAIMER_MODAL = '[Setting] SHOW_DISCLAIMER_MODAL';
export const HIDE_DISCLAIMER_MODAL = '[Setting] HIDE_DISCLAIMER_MODAL';

export class SetReadDisclaimer implements Action {
    readonly type = SET_READ_DISCLAIMER;
}

export class SetLastCampusId implements Action {
    readonly type = SET_LAST_CAMPUS_ID;
    constructor(public payload: number) {}
}

export class ShowDisclaimerModal implements Action {
    readonly type = SHOW_DISCLAIMER_MODAL;
}

export class HideDisclaimerDialog implements Action {
    readonly type = HIDE_DISCLAIMER_MODAL;
}

export type SettingActions =
    | SetReadDisclaimer
    | SetLastCampusId
    | ShowDisclaimerModal
    | HideDisclaimerDialog;
