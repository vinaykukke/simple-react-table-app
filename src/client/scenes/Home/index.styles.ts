import styled from 'styled-components';

export const HomeBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #343a40;
  color: black;
  padding: 1em;

  > h3, h5 {
    color: white;
    margin-bottom: 1em;
  }
`;

export const Button = styled.button`
  height: 30px;
  background: #a23c3c;
  border-radius: 8px;
  margin-left: 1em;
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
`;
