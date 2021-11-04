import React from 'react';
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './constants/theme';
import GlobalState from './contexts/GlobalState';

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
