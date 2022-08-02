import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDarkMode } from 'hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import { lightTheme, darkTheme } from 'styles/themes';
import Home from 'features/Home';
import Toggle from 'components/Toggle';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle toggleTheme={themeToggler} />
        <BrowserRouter>
          <Suspense fallback={false}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
