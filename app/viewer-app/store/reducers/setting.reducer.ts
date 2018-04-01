import * as settingAction from '../actions/setting.action';
import {
    VIEWER_LAST_CAMPUS_KEY,
    VIEWER_READ_DISCLAIMER_KEY
} from '@uow-map/constants';

export interface SettingReducerState {
    hasReadDisclaimer: boolean;
    isDisclaimerModalOpened: boolean;
    lastCampusId: number;
}

export const initialState: SettingReducerState = {
    hasReadDisclaimer:
        localStorage.getItem(VIEWER_READ_DISCLAIMER_KEY) === 'true',
    isDisclaimerModalOpened: false,
    lastCampusId: parseInt(localStorage.getItem(VIEWER_LAST_CAMPUS_KEY), 10)
};

export function reducer(
    state: SettingReducerState = initialState,
    action: settingAction.SettingActions
): SettingReducerState {
    switch (action.type) {
        case settingAction.SET_LAST_CAMPUS_ID: {
            const lastCampusId = action.payload;
            return {
                ...state,
                lastCampusId
            };
        }

        case settingAction.SET_READ_DISCLAIMER: {
            return {
                ...state,
                hasReadDisclaimer: true
            };
        }

        case settingAction.HIDE_DISCLAIMER_MODAL: {
            return {
                ...state,
                isDisclaimerModalOpened: false
            };
        }

        case settingAction.SHOW_DISCLAIMER_MODAL: {
            return {
                ...state,
                isDisclaimerModalOpened: true
            };
        }
    }

    return state;
}
