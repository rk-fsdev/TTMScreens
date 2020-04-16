import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#54c56d',
    },
    secondary: {
      main: '#ffc000',
    },
  },
});

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
