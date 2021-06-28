import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Head from "next/head";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Wrapper } from "../components/wrapper";
import { theme } from "../theme/sith.theme";
import { Theme } from "../theme/theme.provider";

library.add(fab, far);

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  * {
    font-family: 'Nunito', sans-serif;
  }
  body {
    background-image: url("/images/brain.jpg");
    background-repeat: no-repeat;
    background-color: #252331;
    margin: 0;
    @media (max-width: 992px) {
      background-position: -245px -215px;
    }
  }
  .carousel .slide {
    background-color: transparent;
  }
  h1, h2, h3, h4 {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <Theme>
          <GlobalStyle />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </Theme>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
