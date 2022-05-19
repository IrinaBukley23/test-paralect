import { Dispatch } from 'react';
import { Action } from 'redux';
import { IUserList, UserTypes } from './actionTypes';

export const setFetchUser = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: UserTypes.FETCH_USER,
    });
    fetch(' https://api.github.com/users/gaearon')
      .then((res): Promise<IUserList> => res.json())
      .then((data) => {
        dispatch({ type: UserTypes.FETCH_USER_SUCCESS });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setSearch = (search: string) => ({
  type: UserTypes.SET_SEARCH,
  payload: search,
});
