import * as React from "react";
import Head from "next/head";
import { About } from "../../components/about";
import { Education, FullBanner, Jobs, Newsletter, Services, Skills } from "../../components";

export interface IHomeProps {}

export default function HomePage(props: IHomeProps) {
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
