import React from 'react';
import Header from '../Header';
import CONSTANTS from '../../constants';
import Button from '../Button';
import Picture from '../Picture';
import id_card from '../../assets/id_card.png';

import Tag from '../Tag';
import { ReactComponent as WrongTag } from '../../assets/wrong.svg';
import CamPicture from '../CamPicture';

const Home: React.FC = (): JSX.Element => {
  return (
    <section>
      <Header title={CONSTANTS.APP_NAME} />
      <Button
        title={CONSTANTS.TAKE_PICTURE}
        type={'button'}
        borderRadius={'24px'}
        backgroundColor={'#2F0079'}
      />
      <Picture photo={id_card} valid={false} />
      <Tag backgroundColor={'#C00000'} label={'Rejected'} icon={<WrongTag />} />
      <CamPicture photo={id_card} />
    </section>
  );
};

export default Home;
