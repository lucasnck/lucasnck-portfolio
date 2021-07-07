import * as React from "react";
import { Container } from "../container";
import { ReactJS, TypeScript } from "../icons";
import Analytics from "../icons/analytics";
import Angular from "../icons/angular";
import GTM from "../icons/gtm";
import Java from "../icons/java";
import JavaScript from "../icons/javascript";
import Optimize from "../icons/optimize";
import { Sass } from "../icons/sass";
import VTEX from "../icons/vtex";
import { Section } from "../section";
import { Slider } from "../slider";
import { Text } from "../text";
import { Icon, Item, SkillStyle } from "./style";

export interface ISkillsProps {}

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 5,
  centerMode: false,
  centerPadding: "15px 0px 0 0",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export function Skills(props: ISkillsProps) {
  return (
    <Section id="skills">
      <SkillStyle>
        <div className="skewed top" />
        <Container>
          <div className="skill-container-full">
            <div className="skewed detail bottom" />
            <div className="skewed detail top" />
          </div>
          <div className="internal-container">
            <div className="header">
              <h2>Skills and Experiences</h2>
              <Text as="span" type="text-light">
                Technologies, tools, libraries, frameworks. Knowledge acquired during my career and also the development
                of personal projects.
              </Text>
            </div>

            <Slider {...settings}>
              <Item>
                <div>
                  <h3>
                    <Icon>
                      <JavaScript />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    JavaScript, Vanilla, ECMAScript, global variables, events, promises, async/await and builder, method
                    chain, module pattern.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <ReactJS />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    React Hooks experience with Compound, Render Props, High Order Components, Classical, Function
                    Components, Custom Hooks, Events, etc.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <TypeScript />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Typescript and ECMAScript with React, Node and Angular, object oriented programming, interfaces,
                    abstract classes, generics, decorations, enums, mixins, namespace and others.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <Java />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Java with JSF, JPA, Spring Boot, Eclipse, Netbeans, Lambda, Annotations, Reflection API, Criteria
                    API, Hibernate, JPA.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <Sass />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Sass/CSS3 styles, modules, variables, mixins, functions, tokens, theming, imports, extends, flex,
                    transitions, transforms, animations
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <Angular />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Angular, controlers, forms, renders.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <GTM />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Google Tag Manager, create tags, variables, integrations.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <Analytics />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Google Analytics configurations, analysis, create basic reports
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <Optimize />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Optimize Test A/B, UX, UI, Customer Success
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <VTEX />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    VTEX CMS e-commerce development, configuration
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <img src="/images/styled-components.png" alt="Styled Components" width="34" />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Styled-Components, CSS in JS,
                  </Text>
                </div>
              </Item>
            </Slider>
          </div>
        </Container>
        <div className="skewed bottom" />
      </SkillStyle>
    </Section>
  );
}
