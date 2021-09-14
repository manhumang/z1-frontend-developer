import views from '../../components/views';
import { CAM_VIEW_PATH, HOME_PATH } from './paths';

const HOME = {
  component: views.Home,
  path: HOME_PATH
};

const CAM_VIEW = {
  component: views.CamView,
  path: CAM_VIEW_PATH
};

export default [HOME, CAM_VIEW];
