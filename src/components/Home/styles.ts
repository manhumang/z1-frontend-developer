import styled from 'styled-components';

export const StyledHomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .picture {
    margin-top: 27px;
    & .tag {
      position: absolute;
      bottom: -15px;
      right: 15px;
    }
    button {
      position: absolute;
    }
  }
`;
