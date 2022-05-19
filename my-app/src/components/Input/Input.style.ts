import styled from 'styled-components';

export const Input = styled.div`
  position: relative;
  input {
    width: 500px;
    border: none;
    border-radius: 6px;
    padding: 8px 44px;
    background-color: var(--color-bg);
  }
  input:placeholder {
    color: var(--color-text);
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Icon = styled.div`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 7px;
  left: 19px;
  img {
    width: 100%;
  }
`;
