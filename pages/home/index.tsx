import * as React from "react";
import { Education, FullBanner, Jobs, Newsletter, Services, Skills, About } from "../../components";
import { Projects } from "../../components/projects";

export interface IHomeProps {}

export default function HomePage(props: IHomeProps) {
  return (
    <>
      <FullBanner />
      <About />
      <Services />
      <Skills />
      <Jobs />
      <Projects />
      <Education />
      <Newsletter />
    </>
  );
}
