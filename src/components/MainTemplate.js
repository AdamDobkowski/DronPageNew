/** @format */

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/style/GlobalStyle';
import { theme } from 'assets/style/theme';
// import PropTypes from 'prop-types'

function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

export default MainTemplate;
