// import { Header, Footer } from "../components";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import React from "react";
import { Theme } from "../theme/theme.provider";
import { Wrapper } from "../components/wrapper";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/sith.theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { SmoothScroll } from "../components";

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
  // const { scrollingContainerRef } = useSmoothScroll();

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
          {/* <BackgroundImage>
            <Image alt="brain" src="/images/brain.jpg" layout="fill" objectFit="cover" quality={100} />
          </BackgroundImage> */}
          <GlobalStyle />
          {/* <SmoothScroll> */}
          <Wrapper>
            {/* <CustomCursorManager>
        <CustomCursor /> */}
            <Component {...pageProps} />
            {/* </CustomCursorManager> */}
          </Wrapper>
          {/* </SmoothScroll> */}
        </Theme>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
