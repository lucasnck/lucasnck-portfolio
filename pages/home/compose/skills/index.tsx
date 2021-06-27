import * as React from "react";
import { Container, Slider, Text } from "../../../../components";
import { Icon, Item, SkillStyle } from "./style";
import ReactIcon from "../../../../public/brands/react.svg";
import TypescriptIcon from "../../../../public/brands/typescript.svg";
import JavascriptIcon from "../../../../public/brands/javascript.svg";
import CsharpIcon from "../../../../public/brands/csharp.svg";
import AngularIcon from "../../../../public/brands/angular.svg";
import JavaIcon from "../../../../public/brands/java.svg";
import GTMIcon from "../../../../public/brands/gtm.svg";
import AnalyticsIcon from "../../../../public/brands/analytics.svg";
import OptimizeIcon from "../../../../public/brands/optimize.svg";
import GraphqlIcon from "../../../../public/brands/graphql.svg";
import CSSIcon from "../../../../public/brands/css.svg";
import SASSIcon from "../../../../public/brands/sass.svg";
import VtexIcon from "../../../../public/brands/vtex.svg";
import { Section } from "../../../../components/section";

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

export default function Skills(props: ISkillsProps) {
  return (
    <Section id="skills">
      <SkillStyle>
        <div className="skewed top"></div>
        <Container>
          <div className="skill-container-full">
            <div className="skewed detail bottom"></div>
            <div className="skewed detail top"></div>
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
                      <ReactIcon />
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
                      <TypescriptIcon />
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
                      <JavascriptIcon />
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
                      <CsharpIcon />
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
                      <AngularIcon />
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
                      <JavaIcon />
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
                      <GTMIcon />
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
                      <AnalyticsIcon />
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
              </Item>
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
              <Item>
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
              </Item>
            </Slider>
          </div>
        </Container>
        <div className="skewed bottom"></div>
      </SkillStyle>
    </Section>
  );
}
