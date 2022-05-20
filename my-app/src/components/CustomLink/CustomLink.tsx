import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  to: string;
  target?: string;
}

const CustomLink = ({ children, to, target }: IProps) => {
  return (
    <Link to={to} target={target}>
      {children}
    </Link>
  );
};

export default CustomLink;
