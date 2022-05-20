import * as Styled from './NotFoundRepo.style';
import empty from '../../assets/icons/empty.png';

const NotFoundRepo = () => {
  return (
    <Styled.Error>
      <Styled.Image>
        <img src={empty} alt="user_not_found" />
      </Styled.Image>
      <Styled.Text>Repository list is empty</Styled.Text>
    </Styled.Error>
  );
};

export default NotFoundRepo;
