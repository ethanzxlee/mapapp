import * as mapboxAction from '../actions/mapbox.action';

export interface MapboxReducerState {
  token: MapboxTokenState;
}

export interface MapboxTokenState {
  value: string;
  loading: boolean;
  loaded: boolean;
  loadingError: any;
}

export const initialState: MapboxReducerState = {
  token: {
    value: null,
    loading: false,
    loaded: false,
    loadingError: null
  }
};

export function reducer(
  state: MapboxReducerState = initialState,
  action: mapboxAction.MapboxActions
): MapboxReducerState {
  switch (action.type) {
    case mapboxAction.GET_TOKEN: {
      return {
        ...state,
        token: {
          ...state.token,
          value: null,
          loading: true,
          loaded: false,
          loadingError: null
        }
      };
    }

    case mapboxAction.GET_TOKEN_OK: {
      const token = action.payload;
      return {
        ...state,
        token: {
          ...state.token,
          value: token,
          loading: false,
          loaded: true,
          loadingError: null
        }
      };
    }

    case mapboxAction.GET_TOKEN_ERROR: {
      const error = action.payload;
      return {
        ...state,
        token: {
          ...state.token,
          value: null,
          loading: false,
          loaded: false,
          loadingError: error
        }
      };
    }
  }

  return state;
}
