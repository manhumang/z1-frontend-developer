import styled from 'styled-components';
import { colors, sizes } from '../../core/styles/globalStyles';
import { IPictureProps } from './Picture';

export const StyledWrappedPicture = styled.div`
  position: relative;
  height: 160px;
  width: 260px;
  border-radius: ${sizes.sizeS};
  background-color: ${colors.white};
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ valid }: IPictureProps) =>
    typeof valid === 'boolean' && valid && 'pointer'};
  border: ${({ valid }: IPictureProps) =>
    typeof valid === 'boolean' &&
    (valid
      ? `2px solid ${colors.greenLight}`
      : `2px solid ${colors.redLight}`)};
  svg {
    ${({ valid }: IPictureProps) =>
      typeof valid === 'boolean'
        ? 'width: 30px'
        : `height: 124px
          width: 217px`};
  }
`;
