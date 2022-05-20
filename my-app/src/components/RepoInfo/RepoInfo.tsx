import { IRepoList } from '../../store/utils';
import * as Styled from './RepoInfo.style';

interface IProps {
  repoItem: IRepoList;
}

const RepoInfo = (props: IProps) => {
  return (
    <Styled.Item>
      <Styled.Title>{props.repoItem.name}</Styled.Title>
      <Styled.Descr>{props.repoItem.description}</Styled.Descr>
    </Styled.Item>
  );
};

export default RepoInfo;
