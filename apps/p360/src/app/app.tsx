import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/dark.theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Navigation } from '@p360/navigation/feature';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Container disableGutters={true} maxWidth="xl">
          <Navigation />
        </Container>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
