import styled from 'styled-components';
import { ICamPictureProps } from './CamPicture';
import cam_view from '../../assets/cam_view.png';
import { colors } from '../../core/styles/globalStyles';

export const StyledWrappedCamPicture = styled.div`
  height: 179px;
  width: 289px;
  border-radius: 18px;
  background-image: url(${cam_view});

  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ valid }: ICamPictureProps) =>
    typeof valid === 'boolean' &&
    (valid
      ? `2px solid ${colors.greenLight}`
      : `2px solid ${colors.redLight}`)};
`;

export const StyledCamPicture = styled.img`
  height: 165px;
  width: 264px;
  transform: rotate(-1deg);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;
