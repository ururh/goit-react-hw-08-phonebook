import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 20px;

  width: 320px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-size: 20px;
  }

  input {
    padding: 8px;
  }

  button {
    margin-top: 15px;
    padding: 10px;
    border: none;
    border-radius: 5px;

    &:hover,
    &:focus {
      background-color: blue;
      color: #fff;
      cursor: pointer;
    }
  }
`;
