import styled from 'styled-components';
import { ReactElement } from 'react';

interface ITag {
  backgroundColor: string;
  icon?: ReactElement;
}

export const StyledTag = styled.div<ITag>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 30px;
  width: 102px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled.h1`
  font-size: 12px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 12px;
  text-transform: uppercase;
  width: 64px;
`;
