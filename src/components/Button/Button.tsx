import React from 'react';
import { colors, sizes } from '../../core/styles/globalStyles';
import Typo from '../Typo';
import * as Styled from './styles';

export interface IButtonProps {
  title: string | false;
  type: 'button' | 'submit' | 'reset';
  borderRadius?: string;
  backgroundColor?: string;
  onClick?: any;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { title, type, borderRadius, backgroundColor, onClick } = props;
  return (
    <Styled.StyledButton
      type={type}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      <Typo
        text={title}
        color={colors.white}
        textTransform={'uppercase'}
        size={sizes.sizeM}
        weight={'bold'}
      />
    </Styled.StyledButton>
  );
};
export default Button;
