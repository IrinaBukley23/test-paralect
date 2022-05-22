import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 91vh;
  max-width: 1366px;
  margin: auto;
  padding: 40px 57px;
  display: flex;
  flex-wrap: wrap;
`;

export const Descr = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  li {
    margin: 0 0 20px 0;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  line-height: 19px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.6s all;
  &:hover {
    background-color: grey;
  }
`;
