import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string,
      gray: string,
      blue: string,
    };
  }
}