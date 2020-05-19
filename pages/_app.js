import App from 'next/app';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import '../styles/style.css';

const theme = {
  // Colors
  primary: '#593792',
  primaryDark: '#000',
  primaryLight: '#fff',
  background: '#fbfbfb',
  accent: '#5BBFB4',

  // Max Width
  maxWidth: '980px',

  // Flex
  flex: 'display: flex; align-items: center;',
  grid:
    'display: grid;  align-items: center; justify-content: center; justify-items: center',

  // Form
  inputForm:
    'font-size: 1.6rem; width: 100%; border-radius: 4px; border: 1px solid #dddddd; padding: 1rem; margin: 1rem 0',

  //Breakpoints

  breakpoints: {
    ss: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <NextSeo
          title='Clicksoft - Aplicativos, sites, sistemas e marketing digital.'
          description='Aplicativos, sites, sistemas e marketing digital.'
          canonical='https://viniciusmoreeira.now.sh/'
          hrefLang='pt-BR'
          openGraph={{
            url: 'https://viniciusmoreeira.now.sh/',
            title:
              'Clicksoft - Aplicativos, sites, sistemas e marketing digital.',
            description: 'Aplicativos, sites, sistemas e marketing digital.',
            images: [
              {
                url: 'https://i.imgur.com/CDmlNOF.png',
                width: 800,
                height: 600,
                alt: 'Website Logo',
              },
            ],
            site_name:
              'Clicksoft - Aplicativos, sites, sistemas e marketing digital.',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
