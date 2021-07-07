import * as React from "react";
import { Container } from "../container";
import { Flex } from "../flex";
import { Section } from "../section";
import { Slider } from "../slider";
import { Text } from "../text";
import { JobItem, JobsStyle } from "./jobs.style";

export interface IJobsProps {}

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoPlay: true,
  centerMode: true,
  centerPadding: "15px 0px 0 0",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
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

export function Jobs(props: IJobsProps) {
  return (
    <Section id="jobs">
      <JobsStyle>
        <Container>
          <Flex column centeredY style={{ marginBottom: "1rem" }}>
            <Text type="primary" as="h2" align="center" fontSize="32px">
              "Frontend Developer
              <br /> 5y+ of experience"
            </Text>
            <Text type="text-light" as="p" align="center" fontSize="18px">
              JavaScript and Java developer with experience with e-commerce, DX, platforms, websites and mobile
            </Text>
          </Flex>
          <div
            style={{
              width: "100%",
            }}
          >
            <Slider {...settings}>
              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2020/current</span>
                  </div>
                  <div>
                    <h3>Front-end Developer</h3>
                    <h4>BTG+ Business</h4>
                    <span>Banking</span>
                    <p>
                      BTG Pactual is a Brazilian financial company that operates in the markets of Investment banking,
                      Wealth management, Asset management, Corporate lending and Sales and trading.
                    </p>
                    <p>
                      Experience with JavaScript, React, Vanilla, NextJS, AWS, Azure DevOps, jQuery, Bootstrap,
                      SmartAdmin, Webpack, NodeJS, ANTD, Rest APIs, DevExtreme, Git Submodules, Micro-frontend,
                      multirepo, monorepo, npm, yarn, git, CSS3/SASS, styled-components, NextJS, CMS, SCRUM.
                    </p>
                  </div>
                </div>
              </JobItem>

              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2019/2020</span>
                  </div>
                  <div>
                    <h3>Front-end Developer</h3>
                    <h4>Capgemini Engineering / Altran</h4>
                    <span>Consultant for BTG Pactual</span>
                    <p>
                      Capgemini Engineering is a global innovation and engineering consulting. Altran operates primarily
                      in high technology and innovation consultancy.
                    </p>
                    <p>
                      Experience with JavaScript, React, Vanilla, AWS, Azure DevOps, jQuery, Bootstrap, SmartAdmin,
                      Webpack, NodeJS, ANTD, Rest APIs, DevExtreme, Git Submodules, Micro-frontend, multirepo, monorepo,
                      npm, yarn, git, styled-components, NextJS, CMS, SCRUM.
                    </p>
                  </div>
                </div>
              </JobItem>

              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2018/2019</span>
                  </div>
                  <div>
                    <h3>Front-end Developer</h3>
                    <h4>Leveros</h4>
                    <span>E-commerce</span>
                    <p>
                      Leveros is an electronics retailer in the refrigeration segment, with air conditioners as a
                      highlight.
                    </p>
                    <p>
                      Technologies: JavaScript, React, NodeJS, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp,
                      Babel, Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance,
                      VTEX.
                    </p>
                  </div>
                </div>
              </JobItem>

              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2017/2018</span>
                  </div>
                  <div>
                    <h3>Front-end Developer</h3>
                    <h4>ADMAKE</h4>
                    <span>E-commerce</span>
                    <p>Ecommerce agency.</p>
                    <p>
                      Experiences in JavaScript, TypeScript, jQuery, Angular, React, CSS3/SASS, HTML5, Bootstrap, GIT,
                      PHP, Gulp, Babel, GTM, SEO, VTEX, Wordpress, LojaIntegrada, Woocommerce, Idealeware, Nuvemshop,
                      Tray.
                    </p>
                  </div>
                </div>
              </JobItem>

              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2009/2010</span>
                  </div>
                  <div>
                    <h3>Internship Informatic Monitor</h3>
                    <h4>FUNDAP</h4>
                    <span>Education</span>
                    <p>
                      The Administrative Development Foundation (Fundap) was a state agency in São Paulo, headquartered
                      in São Paulo, created in 1974, headquartered in São Paulo, which operated in the areas of
                      training, research and consulting in public management.
                    </p>
                  </div>
                </div>
              </JobItem>

              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2012/2017</span>
                  </div>
                  <div>
                    <h3>Public Service Agent</h3>
                    <h4>State of São Paulo</h4>
                    <span>Public Service</span>
                    <p>Public service in State of São Paulo.</p>
                  </div>
                </div>
              </JobItem>

              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2015</span>
                  </div>
                  <div>
                    <h3>Interniship Monitor for C/C++ language</h3>
                    <h4>FATEC</h4>
                    <span>Education</span>
                    <p>Monitor of data structure for technology students in programming languages C/C++</p>
                  </div>
                </div>
              </JobItem>

              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2016</span>
                  </div>
                  <div>
                    <h3>Interniship Front-end Developer</h3>
                    <h4>TNT Technology</h4>
                    <span>Software Development</span>
                    <p>Software Factory for the development of custom-built IT solutions.</p>
                    <p>Technologies: JavaScript, jQuery, Bootstrap, Java Applets, PostgreSQL, CSS3, HTML5</p>
                  </div>
                </div>
              </JobItem>
            </Slider>
          </div>
        </Container>
      </JobsStyle>
    </Section>
  );
}
