import * as Styled from './Header.style';
import logo from '../../assets/icons/github.png';
import Input from '../Input/Input';
import {
  setIsActive,
  setLoading,
  setSearch,
  setUserData,
} from '../../store/actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/utils';

const Header = () => {
  const { search, isActive, userData } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const getData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setUserData(data));
    dispatch(setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsActive(true));
    dispatch(setSearch(e.target.value));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearch(''));
    try {
      getData(`https://api.github.com/users/${search}`);
    } catch (error) {
      console.log('Error...');
    }
  };
  console.log(userData);
  console.log(search);
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Styled.Logo>
          <img src={logo} alt="github" />
        </Styled.Logo>
        <Input
          isActive={isActive}
          value={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Styled.Wrapper>
    </Styled.Header>
  );
};

export default Header;
