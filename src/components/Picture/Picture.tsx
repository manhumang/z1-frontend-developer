import React from 'react';
import * as Styled from './styles';
import { ReactComponent as DefaultPicture } from '../../assets/id_bg.svg';

export interface IPictureProps {
  photo?: string;
  valid?: boolean;
}

const Picture: React.FC<IPictureProps> = (props: IPictureProps) => {
  const { photo, valid } = props;
  return (
    <Styled.StyledWrappedPicture valid={valid}>
      {!photo ? <DefaultPicture /> : <img src={photo} />}
    </Styled.StyledWrappedPicture>
  );
};
export default Picture;
