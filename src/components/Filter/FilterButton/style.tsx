import styled from 'styled-components';

export const StyledButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: ${({ isActive }) => (isActive ? '#EB1212' : '#EEEEEE')};
  color: ${({ isActive }) => (isActive ? 'white' : '#909090')};
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
  font-wieght: 500;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
  }
`;