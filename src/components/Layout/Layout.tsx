import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Text } from 'styles/globalStyles';
import Toggle from 'components/Toggle';
import { Row } from 'react-flexbox-grid';

import { useDarkMode } from 'hooks/useDarkMode';
import { Wrapper } from './Layout.styles';
import { lightTheme, darkTheme } from 'styles/themes';
import { store } from '../../store';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const handleToggleClick = () => {
    toggleTheme();
  };

  return (
    <Wrapper>
      <Provider store={store}>
        <ThemeProvider theme={themeMode}>
          <Row end="xs" middle="xs">
            <Text fontSize="1.2rem" fontWeight="500" style={{ marginRight: '.8rem' }}>
              Change theme!
            </Text>
            <Toggle toggleTheme={handleToggleClick} defaultChecked={theme === 'dark'} />
          </Row>
          <GlobalStyles />

          <main>{children}</main>
        </ThemeProvider>
      </Provider>
    </Wrapper>
  );
};

export default Layout;
