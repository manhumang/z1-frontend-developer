import styled from 'styled-components';

interface IButton {
  backgroundColor?: string;
  borderRadius?: string;
}

export const StyledButton = styled.button<IButton>`
  padding: 0 20px;
  cursor: pointer;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  box-shadow: 0 10px 20px -5px rgba(47, 0, 121, 0.3);
`;
