import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { UserProvider } from 'context/UserContext'

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  body {
    font-family: 'Spartan', sans-serif;
    color: '#2d2d2d';
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#67a32b',
    background: '#f5f7fc', // f6f6f5
    text: '#2d2d2d',
    blue: '#0052d0',
    gray: '#313131',
    green: '#03e07c'
  },
  breakpoints: {
    mobile: '599px',
    desktop: '1200px',
    bigDesktop: '1800px',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    )
  }
}
