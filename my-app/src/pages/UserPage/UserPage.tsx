import { useState, useEffect } from 'react';
import * as Styled from './UserPage.style';
import dbl from '../../assets/icons/dbl.png';
import single from '../../assets/icons/single.png';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(' https://api.github.com/users/octocat')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Personal>
        <Styled.Photo>
          <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="photo" />
        </Styled.Photo>
        <Styled.Name>The Octocat</Styled.Name>
        <Styled.Username>octocat</Styled.Username>
        <Styled.Statistics>
          <Styled.Followers>
            <Styled.FollDbl>
              <img src={dbl} alt={dbl} />
            </Styled.FollDbl>
            <span>5870 followers</span>
          </Styled.Followers>
          <Styled.Followers>
            <Styled.FollSingle>
              <img src={single} alt={single} />
            </Styled.FollSingle>
            <span>9 following</span>
          </Styled.Followers>
        </Styled.Statistics>
      </Styled.Personal>
      <Styled.Repos></Styled.Repos>
    </Styled.Wrapper>
  );
};

export default UserPage;
