import * as React from "react";
import { Container } from "../container";
import { ReactJS, TypeScript } from "../icons";
import Analytics from "../icons/analytics";
import Angular from "../icons/angular";
import GTM from "../icons/gtm";
import Java from "../icons/java";
import JavaScript from "../icons/javascript";
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
              <h2>Skills and Experience</h2>
              <Text as="span" type="text-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </Text>
            </div>

            <Slider {...settings}>
              <Item>
                <div>
                  <h3>
                    <Icon>
                      <ReactJS />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <JavaScript />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </div>
              </Item>

              {/* <Item>
                <div>
                  <h3>
                    <Icon>
                      <CsharpIcon />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </div>
              </Item> */}

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <Angular />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </div>
              </Item>

              {/* <Item>
                <div>
                  <h3>
                    <Icon>
                      <CSSIcon />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <SASSIcon />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </div>
              </Item>

              <Item>
                <div>
                  <h3>
                    <Icon>
                      <OptimizeIcon />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </div>
              </Item> */}
              {/* <Item>
              <div>
                <h3>
                  <Icon>
                    <VtexIcon />
                  </Icon>
                </h3>
                <Text as="span" type="text-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
              </div>
            </Item> */}
              {/* <Item>
                <div>
                  <h3>
                    <Icon>
                      <GraphqlIcon />
                    </Icon>
                  </h3>
                  <Text as="span" type="text-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                </div>
              </Item> */}
            </Slider>
          </div>
        </Container>
        <div className="skewed bottom" />
      </SkillStyle>
    </Section>
  );
}
