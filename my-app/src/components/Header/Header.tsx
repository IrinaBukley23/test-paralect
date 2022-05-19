import * as Styled from './Header.style';
import logo from '../../assets/icons/github.png';
import Input from '../Input/Input';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Styled.Logo>
          <img src={logo} alt="github" />
        </Styled.Logo>
        <Input />
      </Styled.Wrapper>
    </Styled.Header>
  );
};

export default Header;
