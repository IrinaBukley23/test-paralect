import { State } from '../../store/utils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleUserPage = () => {
  const { userData } = useSelector((state: State) => state.user);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div className="container">
        <ul>
          <li>
            <img src={userData.avatar_url} />
          </li>
          <li>Name: {userData.name}</li>
          <li>Followers: {userData.followers}</li>
          <li>Login: {userData.login}</li>
          <li>Public repos: {userData.public_repos}</li>
          <li>twitter: {userData.twitter_username}</li>
          <li>Type: {userData.type}</li>
        </ul>
      </div>
      <button onClick={goBack}>Go back...</button>
    </>
  );
};

export default SingleUserPage;
