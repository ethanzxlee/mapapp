import { Campus } from '@uow-map/models';
import * as campusesAction from '../actions/campuses.action';

export interface CampusesState {
    entities: { [id: number]: Campus };
    loaded: boolean;
    loading: boolean;
    loadingError: any;
}

export const initialCampusesState: CampusesState = {
    entities: null,
    loaded: false,
    loading: false,
    loadingError: null
};

export function campusesStateReducer(
    state: CampusesState = initialCampusesState,
    action: campusesAction.CampusActions
): CampusesState {
    switch (action.type) {
        case campusesAction.GET_ALL: {
            return {
                ...state,
                loading: true
            };
        }

        case campusesAction.GET_ALL_ERROR: {
            const loadingError = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError
            };
        }

        case campusesAction.GET_ALL_OK: {
            const campuses = action.payload;
            const entities = campuses.reduce(
                (previous: { [id: number]: Campus }, campus: Campus) => {
                    return {
                        ...previous,
                        [campus.id]: campus
                    };
                },
                {}
            );
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }

        default:
            return state;
    }
}
