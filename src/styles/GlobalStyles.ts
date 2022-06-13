import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  };

  html {
    padding: 0;
  }

  body {
    font-family: 'SUIT-Medium';
    color: ${({ theme }) => theme.colors.black };
    font-size: 1.125rem;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export default GlobalStyle;