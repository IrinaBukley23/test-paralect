import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';
import * as Styled from './ErrorPage.style';

const ErrorPage = () => {
  return (
    <Styled.Error>
      <Styled.Text>Page does not exist</Styled.Text>
      <ErrorMessage />
      <Styled.Link>
        <Link className="error__link" to="/">
          Back to main page
        </Link>
      </Styled.Link>
    </Styled.Error>
  );
};

export default ErrorPage;
