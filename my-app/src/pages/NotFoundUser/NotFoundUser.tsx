import * as Styled from './NotFoundUser.style';
import user from '../../assets/img/user_not.png';

const NotFoundUser = () => {
  return (
    <Styled.Error>
      <Styled.Image>
        <img src={user} alt="user_not_found" />
      </Styled.Image>
      <Styled.Text>User not found</Styled.Text>
    </Styled.Error>
  );
};

export default NotFoundUser;
