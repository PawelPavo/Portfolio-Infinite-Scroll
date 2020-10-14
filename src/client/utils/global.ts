import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    html, body {
        scroll-behavior: smooth;
        overflow-x: hidden;
        background: #F9EEE2;
        color: #182F53;
    }
        @media only screen and (min-width: 601px) {
        .desktop {
            display: none;
        }
      }
      
      /* If the screen size is 600px or less, set the font-size of <div> to 30px */
      @media only screen and (max-width: 600px) {
        .mobile {
            display: none;
        }
      }
`