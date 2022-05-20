import { Action, UserTypes } from '../actions/actionTypes';
import { Reducer } from 'redux';
import { initialState, IUserData } from '../utils';

export const userReducer: Reducer<IUserData, Action> = (
  state: IUserData = initialState.user,
  action: Action
): IUserData => {
  switch (action.type) {
    case UserTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case UserTypes.SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    }
    case UserTypes.SET_ISACTIVE: {
      return {
        ...state,
        isActive: action.payload,
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
