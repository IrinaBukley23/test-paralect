import * as Styled from './UserPage.style';
import dbl from '../../assets/icons/dbl.png';
import single from '../../assets/icons/single.png';
import RepoInfo from '../../components/RepoInfo/RepoInfo';
import { useSelector } from 'react-redux';
import { State } from '../../store/utils';
import Preloader from '../../components/Preloader/Preloader';
import CustomLink from '../../components/CustomLink/CustomLink';

const UserPage = () => {
  const { loading, userData } = useSelector((state: State) => state.user);
  const { repoData } = useSelector((state: State) => state.repo);
  const preloader = loading ? <Preloader /> : null;

  const followers = userData.followers;
  const num = followers && followers > 1000 ? `${(followers / 1000).toFixed(1)}k` : followers;

  return (
    <Styled.Wrapper>
      {preloader}
      <Styled.Personal>
        <Styled.Photo>
          <img src={userData.avatar_url} alt="photo" />
        </Styled.Photo>
        <Styled.Name>{userData.name}</Styled.Name>
        <CustomLink to={'/user/:${userData.id}'} target="_blank">
          <Styled.Username>{userData.login}</Styled.Username>
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
            <span>{userData.following} following</span>
          </Styled.Followers>
        </Styled.Statistics>
      </Styled.Personal>
      <Styled.Repos>
        <Styled.Title>Repositories ({userData.public_repos})</Styled.Title>
        <Styled.Ul>
          {repoData?.map((repo) => {
            return (
              <li key={repo.id}>
                <RepoInfo repoItem={repo} />
              </li>
            );
          })}
        </Styled.Ul>
      </Styled.Repos>
    </Styled.Wrapper>
  );
};

export default UserPage;
