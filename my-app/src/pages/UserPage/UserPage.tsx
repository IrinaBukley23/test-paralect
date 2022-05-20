import * as Styled from './UserPage.style';
import { useSelector } from 'react-redux';
import { State } from '../../store/utils';
import Preloader from '../../components/Preloader/Preloader';
import NotFoundUser from '../NotFoundUser/NotFoundUser';
import UserInfo from '../../components/UserInfo/UsreInfo';

const UserPage = () => {
  const { loading, userData } = useSelector((state: State) => state.user);
  const { repoData } = useSelector((state: State) => state.repo);
  const preloader = loading ? <Preloader /> : null;

  return (
    <Styled.Wrapper>
      {preloader}
      {userData ? <UserInfo userData={userData} repoData={repoData} /> : <NotFoundUser />}
    </Styled.Wrapper>
  );
};

export default UserPage;
