import React, { ReactElement } from 'react';
import Typo from '../Typo';
import * as Styled from './styles';

interface ITagProps {
  label: string;
  backgroundColor: string;
  icon?: ReactElement;
}

const Tag: React.FC<ITagProps> = (props: ITagProps) => {
  const { label, icon, backgroundColor } = props;
  return (
    <Styled.StyledTag backgroundColor={backgroundColor}>
      {icon}
      <Typo
        text={label}
        color={'#ffffff'}
        size={'12px'}
        weight={'bold'}
        textTransform={'uppercase'}
        width={'64px'}
      />
    </Styled.StyledTag>
  );
};
export default Tag;
