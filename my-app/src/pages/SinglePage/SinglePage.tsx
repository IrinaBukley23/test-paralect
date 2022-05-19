import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { id } = useParams();
  return <>SinglePage {id}</>;
};

export default SinglePage;
