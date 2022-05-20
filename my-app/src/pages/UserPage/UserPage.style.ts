import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 91vh;
  max-width: 1366px;
  margin: auto;
  padding: 40px 57px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Personal = styled.div`
  width: 35%;
`;
export const Repos = styled.div`
  width: 65%;
`;
export const Photo = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 30px;
  img {
    width: 100%;
  }
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 130%;
  color: #000000;
  margin-bottom: 12px;
`;
export const Username = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0064eb;
  margin-bottom: 25px;
`;
export const Statistics = styled.div`
  display: flex;
`;
export const Followers = styled.div`
  display: flex;
  margin-right: 20px;
  span {
    font-size: 16px;
    line-height: 150%;
    color: #000000;
  }
`;
export const FollDbl = styled.div`
  width: 22px;
  height: 16px;
  margin-right: 12px;
  img {
    width: 100%;
  }
`;
export const FollSingle = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  img {
    width: 100%;
  }
`;
export const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
  color: #000000;
`;
export const Ul = styled.ul`
  list-style: none;
  max-width: 870px;
`;
