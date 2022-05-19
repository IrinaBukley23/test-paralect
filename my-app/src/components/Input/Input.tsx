import * as Styled from './Input.style';
import search from '../../assets/icons/search.png';

const Input = () => {
  return (
    <Styled.Input>
      <input type="text" placeholder="Enter GitHub username" />
      <Styled.Icon>
        <img src={search} alt="search" />
      </Styled.Icon>
    </Styled.Input>
  );
};

export default Input;
