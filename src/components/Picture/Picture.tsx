import React from 'react';
import * as Styled from './styles';
import { ReactComponent as DefaultPicture } from '../../assets/id_bg.svg';

export interface IPictureProps {
  photo?: string | null;
  valid?: boolean | null;
  children?: JSX.Element;
  onClick?: any;
}

const Picture: React.FC<IPictureProps> = (props: IPictureProps) => {
  const { photo, valid, children, onClick } = props;
  return (
    <Styled.StyledWrappedPicture
      valid={valid}
      className={'picture'}
      onClick={onClick}
    >
      <>
        {!photo ? <DefaultPicture /> : <img src={photo} />}
        {children}
      </>
    </Styled.StyledWrappedPicture>
  );
};
export default Picture;
