import styled from 'styled-components';

export const Header = styled.header`
  heigth: 72px;
  padding: 16px 41px;
  background-color: var(--color-primary);
`;

export const Wrapper = styled.div`
  max-width: 1366px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Logo = styled.div`
  width: 40px;
  heigth: 40px;
  margin-right: 22px;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    margin: 0 auto 15px;
  }
`;
