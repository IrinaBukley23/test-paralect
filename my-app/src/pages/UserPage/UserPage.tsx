import { useState, useEffect } from 'react';
import * as Styled from './UserPage.style';
import dbl from '../../assets/icons/dbl.png';
import single from '../../assets/icons/single.png';
import RepoInfo from '../../components/RepoInfo/RepoInfo';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(' https://api.github.com/users/gaearon')
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
          <img src="https://avatars.githubusercontent.com/u/810438?v=4" alt="photo" />
        </Styled.Photo>
        <Styled.Name>Dan </Styled.Name>
        <Styled.Username>gaearon</Styled.Username>
        <Styled.Statistics>
          <Styled.Followers>
            <Styled.FollDbl>
              <img src={dbl} alt={dbl} />
            </Styled.FollDbl>
            <span>74258 followers</span>
          </Styled.Followers>
          <Styled.Followers>
            <Styled.FollSingle>
              <img src={single} alt={single} />
            </Styled.FollSingle>
            <span>172 following</span>
          </Styled.Followers>
        </Styled.Statistics>
      </Styled.Personal>
      <Styled.Repos>
        <Styled.Title>Repositories (249)</Styled.Title>
        <Styled.Ul>
          <li>
            <RepoInfo />
          </li>
          <li>
            <RepoInfo />
          </li>
          <li>
            <RepoInfo />
          </li>
          <li>
            <RepoInfo />
          </li>
        </Styled.Ul>
      </Styled.Repos>
    </Styled.Wrapper>
  );
};

export default UserPage;
