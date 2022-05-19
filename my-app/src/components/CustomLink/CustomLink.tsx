import { Link, useMatch } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  to: string;
}

const CustomLink = ({ children, to }: IProps) => {
  const match = useMatch(to);

  return <Link to={to}>{children}</Link>;
};

export default CustomLink;
