import styled from 'styled-components';
import { IPictureProps } from './Picture';

export const StyledWrappedPicture = styled.div`
  height: 160px;
  width: 260px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ valid }: IPictureProps) =>
    typeof valid === 'boolean' &&
    (valid ? '2px solid #69CC8B' : '2px solid #C00000')};
  svg {
    height: 124px;
    width: 217px;
  }
`;
