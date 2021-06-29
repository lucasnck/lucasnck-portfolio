import * as React from "react";
import { Education, FullBanner, Jobs, Newsletter, Services, Skills, About } from "../../components";

export interface IHomeProps {}

export default function HomePage(props: IHomeProps) {
  return (
    <>
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
