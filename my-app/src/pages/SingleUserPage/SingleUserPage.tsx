import { State } from '../../store/utils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './SingleUserPage.style';

const SingleUserPage = () => {
  const { userData } = useSelector((state: State) => state.user);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <Styled.Wrapper>
        <Styled.Image>
          <img src={userData.avatar_url} />
        </Styled.Image>
        <Styled.Descr>
          <Styled.List>
            <li>Name: {userData.name}</li>
            <li>Followers: {userData.followers}</li>
            <li>Login: {userData.login}</li>
            <li>Public repos: {userData.public_repos}</li>
            <li>twitter: {userData.twitter_username}</li>
            <li>Type: {userData.type}</li>
          </Styled.List>
          <Styled.Button onClick={goBack}>Go back...</Styled.Button>
        </Styled.Descr>
      </Styled.Wrapper>
    </>
  );
};

export default SingleUserPage;
