import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Wrapper } from "../components/wrapper";
import { theme } from "../theme/sith.theme";
import { Theme } from "../theme/theme.provider";

library.add(fab, far, fas);

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  * {
    font-family: 'Nunito', sans-serif;
  }
  body {
    background-image: url("/images/brain.jpg");
    background-position: 55% -18%;
    background-repeat: no-repeat;
    background-color: #252331;
    margin: 0;
    @media (min-width: 992px) {
      background-position: 19% -11%;
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

        <title>Lucas Ribeiro - Frontend Developer</title>
        <link rel="icon" sizes="16x16" href="/fav.png" />
        <meta name="theme-color" content="#4514a7" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Lucas Ribeiro - JavaScript developer, specialist in e-commerce and frontend development, tap if you looking for freelancer development."
        />
        <meta
          name="keywords"
          content="JavaScript, Developer, Enginer, Frontend, Dev, FullStack, React, Angular, TypeScript, Java, E-commerce"
        />
        <meta name="author" content="luucasnck@gmail.com" />
        <meta property="og:url" content="https://lucasnck.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucasnck - Frontend Developer" />
        <meta
          property="og:description"
          content="Lucas Ribeiro - JavaScript developer, specialist in e-commerce and frontend development, tap if you looking for freelancer development."
        />
        <meta property="og:image" content="/images/me.jpg" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KTWD6LF');`,
          }}
        />
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTWD6LF"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
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
