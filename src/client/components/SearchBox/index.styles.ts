import styled from 'styled-components';

export const Input = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 10px;
  background: #e4e4e4;
`;

export const SearchboxContainer = styled.div`
  max-width: 60%;
  margin: 1em 0;

  > div {
    color: white;
    margin: 1em 0;
    font-size: 12px;
    font-style: italic;
  }
`;
