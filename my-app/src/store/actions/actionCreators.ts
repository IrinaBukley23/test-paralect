import { IRepoList, IUserList } from '../utils';
import { UserTypes } from './actionTypes';

export const setLoading = (loading: boolean) => ({
  type: UserTypes.SET_LOADING,
  payload: loading,
});

export const setSearch = (search: string) => ({
  type: UserTypes.SET_SEARCH,
  payload: search,
});

export const setIsActive = (isActive: boolean) => ({
  type: UserTypes.SET_ISACTIVE,
  payload: isActive,
});

export const setUserData = (userData: IUserList) => ({
  type: UserTypes.SET_USER_DATA,
  payload: userData,
});

export const setRepoData = (repoData: IRepoList[]) => ({
  type: UserTypes.SET_REPO_DATA,
  payload: repoData,
});
