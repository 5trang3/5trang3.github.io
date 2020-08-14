import React from 'react';
import Header from './header.js';
import Footer from './footer.js'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

export default ({ children }) => {

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
    <ThemeProvider theme={ theme }>
      <div id='backgroundfilm'>
        <Header/>
        { children }
        <Footer/>
      </div>
    </ThemeProvider>
  )
}
