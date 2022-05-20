export type State = {
  user: IUserData;
  repo: IRepoData;
};

export const initialState: State = {
  user: {
    userData: {},
    loading: false,
    error: '',
    search: '',
    isActive: false,
  },
  repo: {
    repoData: [],
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

export interface IRepoData {
  repoData: IRepoList[];
}

export interface IRepoList {
  name: string;
  id?: number;
  description: string;
  created_at?: string;
  forks?: number;
  language?: string;
  open_issues?: number;
  visibility?: string;
  watchers?: number;
}
