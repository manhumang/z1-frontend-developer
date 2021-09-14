import React, { useEffect, useState } from 'react';
import CONSTANTS from '../../constants';
import Button from '../Button';
import id_card from '../../assets/id_card.png';
import CamPicture from '../CamPicture';
import Typo from '../Typo';
import * as Styled from './styles';
import { ReactComponent as CamCheck } from '../../assets/cam_check.svg';
import { HOME_PATH } from '../../config/routing/paths';
import { useHistory } from 'react-router-dom';
import { ICamResponse, Outcome } from '../../core/ifaces/camResponse';
import { colors, sizes } from '../../core/styles/globalStyles';

const CamView: React.FC = () => {
  const history = useHistory();
  const [pictureStatus, setPictureStatus] = useState<Outcome>();

  useEffect(() => {
    let mounted = true;
    const sendPhoto = async (): Promise<void> => {
      const response: Response = await fetch(CONSTANTS.ENDPOINT, {
        method: 'POST'
      });
      try {
        const pictureResponse: ICamResponse = await response.json();
        mounted && setPictureStatus(pictureResponse.summary.outcome);
        /**
         * This is a smal project, so we will use localStorage to save a global state.
         * For bigger projects, we can use Redux, React Context or the powerful cache of Apollo Client / React Query.
         */
        localStorage.setItem(
          'picture-status',
          pictureResponse.summary.outcome as string
        );
      } catch (error: any) {
        console.error(`A request error has occured: ${error.message}`);
      }
      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        throw new Error(message);
      }
    };

    sendPhoto();
    return () => {
      mounted = false;
    };
  }, []);

  /**
   * We could to use the useCallback hook to memorize the function if the processing was large.
   * In this case, it is not needed
   */
  const goToHome = (): void => {
    history.push(HOME_PATH);
  };

  return (
    <Styled.StyledCamSection>
      <Typo
        text={CONSTANTS.TAKE_PICTURE}
        color={colors.white}
        size={sizes.sizeL}
        weight={'bold'}
      />
      <Typo
        text={CONSTANTS.CAM_SUBTITLE}
        color={colors.white}
        size={sizes.sizeM}
      />

      <CamPicture
        photo={id_card}
        valid={pictureStatus && (pictureStatus === 'Approved' ? true : false)}
      />

      <Styled.StyledSuccessInfo>
        {pictureStatus === 'Approved' && (
          <>
            <CamCheck />
            <Typo
              text={CONSTANTS.PICTURE_TAKEN}
              color={colors.white}
              size={sizes.sizeM}
            />
          </>
        )}
      </Styled.StyledSuccessInfo>

      <Button title={CONSTANTS.CANCEL} type={'button'} onClick={goToHome} />
    </Styled.StyledCamSection>
  );
};

export default CamView;
