import { Action, UserTypes } from '../actions/actionTypes';
import { Reducer } from 'redux';
import { initialState, IRepoData } from '../utils';

export const repoesReducer: Reducer<IRepoData, Action> = (
  state: IRepoData = initialState.repo,
  action: Action
): IRepoData => {
  switch (action.type) {
    case UserTypes.SET_REPO_DATA: {
      return {
        ...state,
        repoData: [...action.payload],
      };
    }
    default:
      return state;
  }
};
