import * as Styled from './Input.style';
import searchImg from '../../assets/icons/search.png';

interface IProps {
  isActive: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const Input = (props: IProps) => {
  return (
    <Styled.Form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={props.value}
        onChange={props.handleChange}
      />
      <Styled.Icon>
        <img src={searchImg} alt="search" />
      </Styled.Icon>
    </Styled.Form>
  );
};

export default Input;
