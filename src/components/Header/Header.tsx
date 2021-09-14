import React from 'react';
import Typo from '../Typo';
import * as Styled from './styles';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { title } = props;
  return (
    <Styled.StyledHeader>
      <Typo
        text={title}
        color={'#2f0079'}
        weight={'bold'}
        size={'21px'}
        fontStyle={'italic'}
      />
    </Styled.StyledHeader>
  );
};
export default Header;
