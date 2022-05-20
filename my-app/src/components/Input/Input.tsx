import * as Styled from './Input.style';
import searchImg from '../../assets/icons/search.png';
import CustomLink from '../CustomLink/CustomLink';

interface IProps {
  isActive?: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const Input = (props: IProps) => {
  return (
    <CustomLink to="/user">
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
    </CustomLink>
  );
};

export default Input;
