import * as Styled from './StartPage.style';
import start from '../../assets/icons/start.svg';

const StartPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Image>
        <img src={start} alt="user_not_found" />
      </Styled.Image>
      <Styled.Text>
        Start with searching <br /> a GitHub user
      </Styled.Text>
    </Styled.Wrapper>
  );
};

export default StartPage;
