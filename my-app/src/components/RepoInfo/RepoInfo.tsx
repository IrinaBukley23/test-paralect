import { IRepoList } from '../../store/utils';
import CustomLink from '../CustomLink/CustomLink';
import * as Styled from './RepoInfo.style';

interface IProps {
  repoItem: IRepoList;
}

const RepoInfo = (props: IProps) => {
  return (
    <Styled.Item>
      <CustomLink target="_blank" to={`/${props.repoItem.id}`} key={props.repoItem.id}>
        <Styled.Title>{props.repoItem.name}</Styled.Title>
      </CustomLink>
      <Styled.Descr>{props.repoItem.description}</Styled.Descr>
    </Styled.Item>
  );
};

export default RepoInfo;
