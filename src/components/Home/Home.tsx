import React, { useEffect, useState } from 'react';
import Header from '../Header';
import CONSTANTS from '../../constants';
import Button from '../Button';
import Picture from '../Picture';
import id_card from '../../assets/id_card.png';

import Tag from '../Tag';
import { ReactComponent as WrongTag } from '../../assets/wrong.svg';
import { ReactComponent as SuccessTag } from '../../assets/check.svg';
import Typo from '../Typo';
import * as Styled from './styles';
import { useHistory } from 'react-router';
import { CAM_VIEW_PATH } from '../../config/routing/paths';
import { Outcome } from '../../core/ifaces/camResponse';
import { colors, sizes } from '../../core/styles/globalStyles';

const Home: React.FC = () => {
  const history = useHistory();
  const [pictureStatus, setPictureStatus] = useState<Outcome>();

  useEffect(() => {
    /**
     * This is a smal project, so we will use localStorage to save a global state.
     * For bigger projects, we can use Redux, React Context or the powerful cache of Apollo Client / React Query.
     */
    const picture_status = localStorage.getItem('picture-status') as Outcome;
    setPictureStatus(picture_status);
  }, []);

  /**
   * We could to use the useCallback hook to memorize the function if the processing was large.
   * In this case, it is not needed
   */
  const goToCamView = (): void => {
    history.push(CAM_VIEW_PATH);
  };

  return (
    <Styled.StyledHomeSection>
      <Header title={CONSTANTS.APP_NAME} />
      <Typo
        text={CONSTANTS.HOME_TITLE}
        color={colors.black}
        size={sizes.sizeL}
        weight={'bold'}
      />
      <Typo
        text={CONSTANTS.HOME_SUBTITLE}
        color={colors.black}
        size={sizes.sizeM}
      />
      <Picture
        photo={pictureStatus && id_card}
        valid={pictureStatus && (pictureStatus === 'Approved' ? true : false)}
        onClick={pictureStatus === 'Approved' ? goToCamView : null}
      >
        <>
          {pictureStatus &&
            (pictureStatus === 'Approved' ? (
              <Tag
                backgroundColor={colors.greenLight}
                label={CONSTANTS.ACCEPTED}
                icon={<SuccessTag />}
              />
            ) : (
              <Tag
                backgroundColor={colors.redLight}
                label={CONSTANTS.REJECTED}
                icon={<WrongTag />}
              />
            ))}
          {pictureStatus !== 'Approved' && (
            <Button
              title={
                !pictureStatus
                  ? CONSTANTS.TAKE_PICTURE
                  : pictureStatus === 'Too Much Glare' &&
                    CONSTANTS.RETAKE_PICTURE
              }
              type={'button'}
              borderRadius={'24px'}
              backgroundColor={colors.primary}
              onClick={goToCamView}
            />
          )}
        </>
      </Picture>
    </Styled.StyledHomeSection>
  );
};

export default Home;
