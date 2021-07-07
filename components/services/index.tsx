import * as React from "react";
import { Button } from "../button";
import { Container } from "../container";
import { Flex } from "../flex";
import { Mark } from "../mark";
import { Section } from "../section";
import { Slider } from "../slider";
import { Text } from "../text";
import { ServiceItem, ServiceStyle } from "./services.style";

export interface IServicesProps {}

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "15px 0px 0 0",
  autoplay: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export function Services(props: IServicesProps) {
  return (
    <Section id="services">
      <ServiceStyle>
        <Container>
          <Flex column centeredY style={{ marginBottom: "1rem" }}>
            <div>
              <img alt="serices" src="/images/florest-pc.png" width={150} height={150} />
            </div>
            <Text type="primary" as="h2" align="center" fontSize="32px">
              "Before I got here, <br />
              it was all bush"
            </Text>
            <Text type="text-light" as="p" align="center" fontSize="18px">
              Looking for developer? Maybe I can help you with my services:
            </Text>
          </Flex>
          <Slider {...settings}>
            <ServiceItem>
              <Flex column spaceBetween>
                <div>
                  <h2>E-commerce</h2>
                  <p>
                    Development and maintenance specialized in <Mark type="secondary">e-commerce</Mark>, to{" "}
                    <Mark type="secondary">level-up your sales</Mark>. Creating your store from scratch,
                    maintenance/fixes and CMS settings. Also working with SEO markup, performance,{" "}
                    <Mark type="secondary">A/B testing</Mark>, among others. I also have contact with UI/UX
                    professionals and designers <Mark type="secondary">to recommend</Mark>.
                  </p>
                  <p>
                    Previows experience with platforms: <Mark type="secondary">VTEX</Mark>, Loja Integrada, Woocommerce,
                    Tray, Idealeware.
                  </p>
                  <p>
                    Technologies: JavaScript, React, jQuery, Angular, CSS, <Mark type="secondary">GTM</Mark>, Google
                    Analytics, Optimize, Google Search Console, Hotjar, Rest and Graphs APIs, Notions of UI/UX,
                    performance improvements and SEO.
                  </p>
                </div>
                <div>
                  <Button as="a" type="secondary" href="/#newsletter" mAuto>
                    <span>Contact</span>
                  </Button>
                </div>
              </Flex>
            </ServiceItem>
            <ServiceItem>
              <Flex column spaceBetween>
                <div>
                  <h2>Static and Blogs</h2>
                  <p>
                    Development and maintenance with <Mark type="secondary">high technology</Mark> and efficiency, using
                    the technologies <Mark type="secondary">NextJS</Mark>, Wordpress, React, TypeScript, among others.
                    Tags for SEO and adding user behavior tools and integration with CMS, APIs or adding new
                    functionalities.
                  </p>
                  <p>
                    Technologies: NextJS, Gatsby, React, jQuery, JavaScript, Bootstrap, CSS/CSS3, Styled-Components,{" "}
                    <Mark type="secondary">GTM</Mark>, Google Analytics, Optimize, Hotjar, SEO and others.
                  </p>
                </div>
                <div>
                  <Button as="a" type="secondary" href="/#newsletter" mAuto>
                    <span>Contact</span>
                  </Button>
                </div>
              </Flex>
            </ServiceItem>
            <ServiceItem>
              <Flex column spaceBetween>
                <div>
                  <h2>Frontend Architeture</h2>
                  <p>
                    I'm a beginner in frontend architecture, but I can help you with development and technology
                    decisions, to built <Mark type="secondary">platforms</Mark>, structure and project organization with
                    ESLint, Prettier, component development standards, testing, GIT repositories, MF (Micro-frontend),
                    frameworks, etc.
                  </p>
                  <p>
                    Technologies/Concepts/Frameworks: JavaScript, <Mark type="secondary">React</Mark>, Design System,
                    CSS in JS, Styles, UX/UI, Angular, VueJS, <Mark type="secondary">NextJS</Mark>, Typescript,
                    Single-spa, Yarn workspaces, Lerna, Vanilla, Lazy loading, web workers, multirepo, monorepo,
                    multi-stack <Mark type="secondary">Azure DevOps</Mark>, AWS, multidomain, subdomains, environments,
                    Webpack, ESLint, Prettier, Gulp, Babel, React Testing Library, <Mark type="secondary">Vercel</Mark>,
                    Gatsby, Git, Bitbucket, etc.
                  </p>
                </div>
                <div>
                  <Button as="a" type="secondary" href="/#newsletter" mAuto>
                    <span>Contact</span>
                  </Button>
                </div>
              </Flex>
            </ServiceItem>
          </Slider>
        </Container>
      </ServiceStyle>
    </Section>
  );
}
