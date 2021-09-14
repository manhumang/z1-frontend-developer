import React from 'react';
import * as Styled from './styles';

interface ITypoProps {
  text: string;
  color?: string;
  size?: string;
  weight?: 'bold' | number;
  width?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  fontStyle?: 'italic';
}

const Typo: React.FC<ITypoProps> = (props: ITypoProps) => {
  const { color, size, weight, text, width, textTransform, fontStyle } = props;
  return (
    <Styled.StyledTypo
      {...{ color, size, weight, width, textTransform, fontStyle }}
    >
      {text}
    </Styled.StyledTypo>
  );
};
export default Typo;
