import * as React from "react";
import { Container } from "../container";
import { Mark } from "../mark";
import { Section } from "../section";
import { AboutStyle } from "./about.style";

export interface IAboutProps {}

export function About(props: IAboutProps) {
  return (
    <Section id="about">
      <AboutStyle>
        <Container>
          <div className="about-center">
            <div className="message">
              <h2>About</h2>
              <p>
                I was born in October 1992, I grew up immersed in the technology world. At age twelve I had my first
                contact with <Mark type="secondary">programming</Mark>, making simple scripts for BOTs, modifying .lua
                scripts, creating my own game servers and making fake pages of gamming accounts. I learned about
                <Mark type="secondary">web development</Mark> when I was coding templates for blogs on Tumblr website
                and making them available for free on the social network at the age 16. During high school I studied
                technology and information for a while. In 2013 I started graduation in Systems Development. My final
                essay was about <Mark type="secondary">Web Artifacts Generator</Mark>, which had given me the oppotunity
                to publish three scientific articles. In 2017 I work with <Mark type="secondary">Java</Mark> language,
                by implementing an ERP web system for agriculture. I joined an internship at college as a{" "}
                <Mark type="secondary">front-end</Mark> developer and since then I've built a career in this area, by
                working mostly with <Mark type="secondary">e-commerce</Mark>, but at the momet I've been applying my
                knowledge in the financial area.
              </p>
            </div>
          </div>
        </Container>
      </AboutStyle>
    </Section>
  );
}
