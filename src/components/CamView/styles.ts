import styled from 'styled-components';
import cam_bg from '../../assets/cam_bg.png';
import { sizes } from '../../core/styles/globalStyles';

export const StyledCamSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(rgba(20, 28, 38, 0.75), rgba(20, 28, 38, 0.75)),
    url(${cam_bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0 20px;

  button {
    margin-top: 126px;
    position: relative;
  }
  & .cam {
    margin-top: 45px;
  }
`;

export const StyledSuccessInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${sizes.sizeM};
  height: 30px;
  width: 128px;
`;
