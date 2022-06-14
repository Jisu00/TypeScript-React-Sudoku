import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background_color: string,
    palette: {
      black: string,
      gray: string,
      blue: string,
      dark_gray: string,
      dark_blue: string
    };
  }
}