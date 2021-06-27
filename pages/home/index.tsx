import * as React from "react";
import Head from "next/head";
import FullBanner from "./compose/fullbanner";
import About from "./compose/about";
import Services from "./compose/services";
import Skills from "./compose/skills";
import Jobs from "./compose/jobs";
import Education from "./compose/education";
import Newsletter from "./compose/newsletter";

export interface IHomeProps {}

export function HomePage(props: IHomeProps) {
  return (
    <>
      <Head>
        <title>Lucas Ribeiro - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullBanner />
      <About />
      <Services />
      <Skills />
      <Jobs />
      <Education />
      <Newsletter />
    </>
  );
}
