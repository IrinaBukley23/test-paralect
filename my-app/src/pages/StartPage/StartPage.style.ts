import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

export const Image = styled.div`
  width: 65px;
  height: 75px;
  margin-bottom: 45px;
  img {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  font-weight: 400;
  color: var(--color-text);
`;
