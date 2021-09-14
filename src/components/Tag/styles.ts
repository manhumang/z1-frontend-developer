import styled from 'styled-components';
import { ReactElement } from 'react';
import { colors, sizes } from '../../core/styles/globalStyles';

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
  svg {
    width: 30px;
  }
`;

export const StyledLabel = styled.h1`
  font-size: ${sizes.sizeS};
  color: ${colors.white};
  letter-spacing: 0;
  line-height: ${sizes.sizeS};
  text-transform: uppercase;
  width: 64px;
`;
