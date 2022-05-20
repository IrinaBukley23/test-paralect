export type State = {
  user: IUserData;
};

export const initialState: State = {
  user: {
    userData: {},
    loading: false,
    error: '',
    search: '',
    isActive: false,
  },
};

export interface IUserData {
  userData: IUserList;
  loading: boolean;
  error: string;
  search: string;
  isActive: boolean;
}

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
