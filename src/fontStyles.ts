import { createGlobalStyle } from 'styled-components';
// import RobotoWoff from './fonts/roboto-v27-latin-regular.woff';
// import RobotoWoff2 from './fonts/roboto-v27-latin-regular.woff2';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url('./fonts/roboto-v27-latin-regular.woff') format('woff2'),
       url('./fonts/roboto-v27-latin-regular.woff2') format('woff');

}
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
`;

export default FontStyles;
