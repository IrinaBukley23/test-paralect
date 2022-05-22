import * as Styled from './UserPage.style';
import { useSelector } from 'react-redux';
import { State } from '../../store/utils';
import Preloader from '../../components/Preloader/Preloader';
import NotFoundUser from '../NotFoundUser/NotFoundUser';
import UserInfo from '../../components/UserInfo/UsreInfo';
import StartPage from '../StartPage/StartPage';

const UserPage = () => {
  const { loading, userData, search } = useSelector((state: State) => state.user);
  const { repoData } = useSelector((state: State) => state.repo);

  const preloader = loading ? <Preloader /> : null;
  const start = !search && !loading && !userData.id ? <StartPage /> : null;
  const notFound = userData.message == 'Not Found' ? <NotFoundUser /> : null;
  const content = userData.id ? <UserInfo userData={userData} repoData={repoData} /> : null;

  return (
    <Styled.Wrapper>
      {start}
      {notFound}
      {content}
      {preloader}
    </Styled.Wrapper>
  );
};

export default UserPage;
