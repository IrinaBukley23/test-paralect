export enum UserTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  SET_SEARCH = 'SET_SEARCH',
}

export type Action =
  | {
      type: UserTypes.FETCH_USER;
      payload: string;
    }
  | {
      type: UserTypes.FETCH_USER_SUCCESS;
      payload: IUserList;
    }
  | {
      type: UserTypes.SET_SEARCH;
      payload: string;
    };

export interface IUserList {
  avatar_url?: string;
  followers?: number;
  following?: number;
  id?: number;
  login?: string;
  name?: string;
  public_repos?: number;
  twitter_username?: string;
  type?: string;
}
