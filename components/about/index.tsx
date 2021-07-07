import * as React from "react";
import { Button } from "../button";
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
                Born in October 1992, I grew up completely immersed in technology. My first contact with{" "}
                <Mark type="secondary">programming</Mark> was at age twelve, making simple scripts for BOTs, modifying
                .lua scripts, creating my own game servers and making fake pages of gamming accounts. I learned about
                <Mark type="secondary">web development</Mark> when I was coding templates for blogs on the Tumblr site
                and making them available for free on the social network at age 16. In high school I studied technology
                and information for a period. In 2013 I started in Systems Development graduation. My scientific work
                for the conclusion was about <Mark type="secondary">Web Artifacts Generator</Mark>, which earned me 3
                published articles. In 2017 I work with <Mark type="secondary">Java</Mark> language, implementing an ERP
                web system for agriculture. I did an internship at college as a <Mark type="secondary">front-end</Mark>{" "}
                developer and since then I've built a career in the area, working mostly with{" "}
                <Mark type="secondary">e-commerce</Mark>, but currently applying my knowledge in the financial area.
              </p>
              <div>
                <Button type="primary" outlined skewed>
                  <span>download cv</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </AboutStyle>
    </Section>
  );
}
