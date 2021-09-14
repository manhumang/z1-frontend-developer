import styled from 'styled-components';

interface IButton {
  backgroundColor?: string;
  borderRadius?: string;
}

export const StyledButton = styled.button<IButton>`
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  width: 160px;
  box-shadow: 0 10px 20px -5px rgba(47, 0, 121, 0.3);
`;
