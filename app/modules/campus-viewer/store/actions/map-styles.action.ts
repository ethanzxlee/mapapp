import { Action } from '@ngrx/store';
import { Style } from 'mapbox-gl';

export const GET_MAP_STYLE = '[Campus] GET_MAP_STYLE';
export const GET_MAP_STYLE_OK = '[Campus] GET_MAP_STYLE_OK';
export const GET_MAP_STYLE_ERROR = '[Campus] GET_MAP_STYLE_ERROR';
export const SET_CURRENT_MAP_STYLE = '[Campus] SET_CURRENT_MAP_STYLE';

export class GetMapStyle implements Action {
    readonly type = GET_MAP_STYLE;
    constructor(public payload: number) {}
}

export class GetMapStyleOk implements Action {
    readonly type = GET_MAP_STYLE_OK;
    constructor(public payload: { [id: number]: Style }) {}
}

export class GetMapStyleError implements Action {
    readonly type = GET_MAP_STYLE_ERROR;
    constructor(public payload: any) {}
}

export class SetCurrentMapStyle implements Action {
    readonly type = SET_CURRENT_MAP_STYLE;
    constructor(public payload: any) {}
}

export type MapStyleActions = GetMapStyle | GetMapStyleOk | GetMapStyleError | SetCurrentMapStyle;
