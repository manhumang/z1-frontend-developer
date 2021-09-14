import React from 'react';
import { colors, sizes } from '../../core/styles/globalStyles';
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
        color={colors.primary}
        weight={'bold'}
        size={sizes.sizeL}
        fontStyle={'italic'}
      />
    </Styled.StyledHeader>
  );
};
export default Header;
