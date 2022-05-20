import { IUserList } from '../utils';

export enum UserTypes {
  SET_LOADING = 'SET_LOADING',
  SET_USER_DATA = 'SET_USER_DATA',
  SET_SEARCH = 'SET_SEARCH',
  SET_ISACTIVE = 'SET_ISACTIVE',
}

export type Action =
  | {
      type: UserTypes.SET_LOADING;
      payload: boolean;
    }
  | {
      type: UserTypes.SET_USER_DATA;
      payload: IUserList;
    }
  | {
      type: UserTypes.SET_SEARCH;
      payload: string;
    }
  | {
      type: UserTypes.SET_ISACTIVE;
      payload: boolean;
    };
