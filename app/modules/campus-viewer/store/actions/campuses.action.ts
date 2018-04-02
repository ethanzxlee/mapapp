import { Action } from '@ngrx/store';
import { Campus } from '@uow-map/models';

export const GET_ALL = '[Campus] GET_ALL';
export const GET_ALL_OK = '[Campus] GET_ALL_OK';
export const GET_ALL_ERROR = '[Campus] GET_ALL_ERROR';

export class GetAll implements Action {
    readonly type = GET_ALL;
    constructor() {}
}

export class GetAllOk implements Action {
    readonly type = GET_ALL_OK;
    constructor(public payload: Campus[]) {}
}

export class GetAllError implements Action {
    readonly type = GET_ALL_ERROR;
    constructor(public payload: any) {}
}

export type CampusActions = GetAll | GetAllOk | GetAllError;
