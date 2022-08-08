import { DefaultTheme } from 'styled-components';

export type ThemeProp = {
  [key: string]: string | ThemeProp;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: ThemeProp;
  }
}

const sharedStyles = {
  colors: {
    gray: '#bebebe',
    emerald: '#4fbe79',
    white: '#fff',
    warning: '#D31E1E'
  }
};

export const lightTheme: DefaultTheme = {
  colors: {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    ...sharedStyles.colors
  }
};
export const darkTheme: DefaultTheme = {
  colors: {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    ...sharedStyles.colors
  }
};
