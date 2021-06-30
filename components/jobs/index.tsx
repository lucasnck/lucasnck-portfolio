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
  slidesToScroll: 1,
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
              "Frontend Developer with
              <br /> 5 years of experience"
            </Text>
            <Text type="text-light" as="p" align="center" fontSize="18px">
              My previous experience consist with E-commerce development, static and blog pages,
              <br /> financial intitution platform, DX development, ERP and more.
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
                    <span className="year">2009/2010</span>
                  </div>
                  <div>
                    <h3>Internship Informatic Monitor</h3>
                    <h4>FUNDAP</h4>
                    <span>Education</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
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
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </JobItem>
              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2015</span>
                  </div>
                  <div>
                    <h3>Interniship Programming Monitor for C/C++ language</h3>
                    <h4>FATEC</h4>
                    <span>Education</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
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
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
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
                    <span>e-commerce</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
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
                    <span>e-commerce</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </JobItem>
              <JobItem>
                <div>
                  <div className="header">
                    <span className="year">2019/2021</span>
                  </div>
                  <div>
                    <h3>Front-end Developer</h3>
                    <h4>BTG Pactual</h4>
                    <span>Investiment Bank</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
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
