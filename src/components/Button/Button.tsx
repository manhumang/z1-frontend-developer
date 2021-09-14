import React from 'react';
import Typo from '../Typo';
import * as Styled from './styles';

export interface IButtonProps {
  title: string;
  type: 'button' | 'submit' | 'reset';
  borderRadius?: string;
  backgroundColor?: string;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { title, type, borderRadius, backgroundColor } = props;
  return (
    <Styled.StyledButton
      type={type}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      <Typo
        text={title}
        color={'#ffffff'}
        textTransform={'uppercase'}
        size={'16px'}
        weight={'bold'}
      />
    </Styled.StyledButton>
  );
};
export default Button;
