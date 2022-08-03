import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import Toggle from 'components/Toggle';

import { useDarkMode } from 'hooks/useDarkMode';
import { Wrapper } from './Layout.styles';
import { lightTheme, darkTheme } from 'styles/themes';

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Wrapper>
      <ThemeProvider theme={themeMode}>
        <Toggle toggleTheme={toggleTheme} />
        <GlobalStyles />

        <main>{children}</main>
      </ThemeProvider>
    </Wrapper>
  );
};

export default Layout;
