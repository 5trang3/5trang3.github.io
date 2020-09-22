import React from 'react';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00578e',
      },
      secondary: {
        main: '#ffc336',
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <div id="layoutGrid">
        <Header />
        <div id="backgroundfilm">
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
