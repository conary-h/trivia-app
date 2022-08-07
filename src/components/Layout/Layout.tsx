import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import Toggle from 'components/Toggle';

import { useDarkMode } from 'hooks/useDarkMode';
import { Wrapper } from './Layout.styles';
import { lightTheme, darkTheme } from 'styles/themes';
import { store } from '../../store';

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const handleToggleClick = () => {
    toggleTheme();
  };

  return (
    <Wrapper>
      <Provider store={store}>
        <ThemeProvider theme={themeMode}>
          <Toggle toggleTheme={handleToggleClick} defaultChecked={theme === 'dark'} />
          <GlobalStyles />

          <main>{children}</main>
        </ThemeProvider>
      </Provider>
    </Wrapper>
  );
};

export default Layout;
