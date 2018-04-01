import { Action } from '@ngrx/store';

export const GET_TOKEN = '[Mapbox] GET_TOKEN';
export const GET_TOKEN_OK = '[Mapbox] GET_TOKEN_SUCCESS';
export const GET_TOKEN_ERROR = '[Mapbox] GET_TOKEN_ERROR';

export class GetToken implements Action {
    readonly type = GET_TOKEN;
}

export class GetTokenOk implements Action {
    readonly type = GET_TOKEN_OK;
    constructor(public payload: string) {}
}

export class GetTokenError implements Action {
    readonly type = GET_TOKEN_ERROR;
    constructor(public payload?: any) {}
}

export type MapboxActions = GetToken | GetTokenOk | GetTokenError;
