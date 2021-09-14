import React, { ReactElement } from 'react';
import { colors, sizes } from '../../core/styles/globalStyles';
import Typo from '../Typo';
import * as Styled from './styles';

interface ITagProps {
  label?: string;
  backgroundColor: string;
  icon?: ReactElement;
}

const Tag: React.FC<ITagProps> = (props: ITagProps) => {
  const { label, icon, backgroundColor } = props;
  return (
    <Styled.StyledTag backgroundColor={backgroundColor} className="tag">
      {icon}
      <Typo
        text={label}
        color={colors.white}
        size={sizes.sizeS}
        weight={'bold'}
        textTransform={'uppercase'}
        width={'64px'}
      />
    </Styled.StyledTag>
  );
};
export default Tag;
