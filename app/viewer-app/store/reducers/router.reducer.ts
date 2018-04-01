import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Params
} from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

interface ViewerParams extends Params {
    campusId?: string;
    mapNodeId?: string;
    searchString?: string;
}

export interface RouterState {
    url: string;
    queryParams: Params;
    params: ViewerParams;
}

export class CustomRouterStateSerializer
    implements RouterStateSerializer<RouterState> {
    serialize(routerState: RouterStateSnapshot): RouterState {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let params = {};
        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
            params = { ...params, ...state.params };
        }

        return { url, queryParams, params };
    }
}
