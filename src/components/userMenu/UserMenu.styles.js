import styled from 'styled-components';

export const UserTitle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      background-color: #1f0fa7;
      color: #fff;
      cursor: pointer;
    }
  }
`;
