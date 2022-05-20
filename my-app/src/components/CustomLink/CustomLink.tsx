import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  to: string;
}

const CustomLink = ({ children, to, ...props }: IProps) => {

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
