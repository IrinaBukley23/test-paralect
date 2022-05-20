import { IRepoList, State } from '../../store/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useSelector } from 'react-redux';

const SinglePage = () => {
  const { userData } = useSelector((state: State) => state.user);
  const { repoData } = useSelector((state: State) => state.repo);
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [repo, setRepo] = useState<IRepoList>();
  const [isLoaded, setIsLoaded] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const res: Array<string> = [];
  useEffect(() => {
    getData(`https://api.github.com/repos/${userData.login}/${res}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  repoData.map((elem) => {
    elem.id == id ? res.push(elem.name) : res;
  });

  async function getData(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setIsLoaded(true);
    setRepo(data);
  }

  console.log(repo);

  if (!isLoaded) {
    return <Preloader />;
  } else if (repo) {
    return (
      <>
        <div className="container">
          <ul>
            <li>Name: {repo.name}</li>
            <li>Description: {repo.description}</li>
            <li>Created: {repo.created_at}</li>
            <li>Language: {repo.language}</li>
            <li>Issues: {repo.open_issues}</li>
            <li>Visibility: {repo.visibility}</li>
            <li>Watchers: {repo.watchers}</li>
          </ul>
        </div>
        <button onClick={goBack}>Go back...</button>
      </>
    );
  } else {
    return <ErrorMessage />;
  }
};

export default SinglePage;
