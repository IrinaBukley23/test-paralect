import { Action, IUserList, UserTypes } from '../actions/actionTypes';

type State = {
  user: IUserList;
  loading: boolean;
  error: string;
  search: string;
};

const initialState: State = {
  user: {},
  loading: false,
  error: '',
  search: '',
};

export const userReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case UserTypes.FETCH_USER: {
      return {
        ...state,
        user: {},
        loading: true,
      };
    }
    case UserTypes.FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }
    case UserTypes.SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    default:
      return state;
  }
};
