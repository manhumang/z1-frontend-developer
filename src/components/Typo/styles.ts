import styled from 'styled-components';

interface ITypo {
  color?: string;
  size?: string;
  weight?: 'bold' | number;
  width?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  fontStyle?: 'italic';
}

export const StyledTypo = styled.h1<ITypo>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight || 'normal'};
  text-transform: ${({ textTransform }) => textTransform};
  width: ${({ width }) => width};
  font-style: ${({ fontStyle }) => fontStyle};
  text-align: center;
`;
