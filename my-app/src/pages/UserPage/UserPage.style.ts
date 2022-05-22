import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 91vh;
  max-width: 1366px;
  margin: auto;
  padding: 40px 57px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 10px 20px;
    display: block;
  }
`;
