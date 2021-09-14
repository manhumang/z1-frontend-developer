import React from 'react';
import * as Styled from './styles';

export interface ICamPictureProps {
  photo?: string;
  valid?: boolean;
}

const Picture: React.FC<ICamPictureProps> = (props: ICamPictureProps) => {
  const { photo, valid } = props;
  return (
    <Styled.StyledWrappedCamPicture valid={valid}>
      <Styled.StyledCamPicture src={photo} />
      {/* {<img src={photo} />} */}
    </Styled.StyledWrappedCamPicture>
  );
};
export default Picture;
