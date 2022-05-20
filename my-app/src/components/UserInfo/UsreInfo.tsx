import { IRepoList, IUserList } from '../../store/utils';
import RepoInfo from '../RepoInfo/RepoInfo';
import dbl from '../../assets/icons/dbl.png';
import single from '../../assets/icons/single.png';
import * as Styled from './UserInfo.style';
import CustomLink from '../CustomLink/CustomLink';
import NotFoundRepo from '../../pages/NotFoundRepo/NotFoundRepo';

interface IProps {
  userData: IUserList;
  repoData: IRepoList[];
}

const UserInfo = (props: IProps) => {
  const followers = props.userData.followers;
  const num = followers && followers > 1000 ? `${(followers / 1000).toFixed(1)}k` : followers;
  return (
    <>
      <Styled.Personal>
        <Styled.Photo>
          <img src={props.userData.avatar_url} alt="photo" />
        </Styled.Photo>
        <Styled.Name>{props.userData.name}</Styled.Name>
        <CustomLink to={'/user/:${userData.id}'}>
          <Styled.Username>{props.userData.login}</Styled.Username>
        </CustomLink>
        <Styled.Statistics>
          <Styled.Followers>
            <Styled.FollDbl>
              <img src={dbl} alt="dbl" />
            </Styled.FollDbl>
            <span>{num} followers</span>
          </Styled.Followers>
          <Styled.Followers>
            <Styled.FollSingle>
              <img src={single} alt="single" />
            </Styled.FollSingle>
            <span>{props.userData.following} following</span>
          </Styled.Followers>
        </Styled.Statistics>
      </Styled.Personal>
      <Styled.Repos>
        <Styled.Title>Repositories ({props.userData.public_repos})</Styled.Title>
        <Styled.Ul>
          {props.userData.public_repos !== 0 ? (
            props.repoData?.map((repo) => {
              return (
                <li key={repo.id}>
                  <RepoInfo repoItem={repo} />
                </li>
              );
            })
          ) : (
            <NotFoundRepo />
          )}
          {}
        </Styled.Ul>
      </Styled.Repos>
    </>
  );
};

export default UserInfo;
