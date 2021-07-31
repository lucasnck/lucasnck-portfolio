import * as React from "react";
import { useCallback, useRef, useState } from "react";
import { Button } from "../button";
import { Container } from "../container";
import { Flex } from "../flex";
import { Section } from "../section";
import { Slider } from "../slider";
import { Text } from "../text";
import { projects } from "./content";
import { DescriptionContainer, Icon, Item, ProjectsStyle, SelectedProject } from "./style";

export interface ISkillsProps {}

export function Projects(props: ISkillsProps) {
  const sliderRef = useRef<any>();
  const [selectedProject, setSelectedProject] = useState({
    slideIndex: 0,
    updateCount: 0,
  });
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    centerMode: false,
    centerPadding: "15px 0px 0 0",
    autoPlay: true,
    afterChange: () => setSelectedProject((state) => ({ ...state, updateCount: state.updateCount + 1 })),
    beforeChange: (current, next) => setSelectedProject((state) => ({ ...state, slideIndex: next })),
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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const settingsShowcase = {
    ...settings,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoPlay: true,
    dots: false,
    infinite: true,
    arrows: false,
    centerPadding: "2rem 2rem",
    responsive: undefined,
  };

  const changeProject = useCallback((i, index) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      sliderRef.current.slickGoTo(index);
    }, 800);
  }, []);

  return (
    <Section id="projects">
      <ProjectsStyle>
        <Container>
          <Flex column centeredY style={{ marginBottom: "1rem" }}>
            <Text type="primary" as="h2" align="center" fontSize="32px">
              Projects ({projects.length}++)
            </Text>
            <Text type="text-light" as="p" align="center" fontSize="18px">
              Not all but but some projects I've worked on. Some projects may be different from when I worked with them.
            </Text>
          </Flex>
          <Slider
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...settingsShowcase}
          >
            {projects.map((i) => (
              <div>
                <Flex rowMd center columnReverseXs>
                  <Flex column start>
                    <DescriptionContainer loading={loading}>
                      <Text as="h3" type="primary" fontSize="40px" transform="uppercase">
                        {i.title}
                      </Text>
                      <Text as="p" type="text-light">
                        {i.description}
                      </Text>
                      <Button
                        as="a"
                        href={i.url}
                        target="_blank"
                        rel="noreferrer"
                        type="primary"
                        skewed
                        outlined
                        disabled={!i.url}
                      >
                        <span>visit</span>
                      </Button>
                    </DescriptionContainer>
                  </Flex>

                  <Flex column center>
                    <SelectedProject background={i.background} loading={loading}>
                      <img alt={i.id} src={i.logo} />
                    </SelectedProject>
                  </Flex>
                </Flex>
              </div>
            ))}
          </Slider>

          <div id="projects-list" style={{ marginTop: "4rem" }}>
            <Text as="p" type="text-light">
              Select project:
            </Text>
            <Slider {...settings}>
              {projects.map((i, index) => (
                <Item key={i.id}>
                  <button type="button" onClick={() => changeProject(i, index)}>
                    <Icon selected={selectedProject.slideIndex === index}>
                      <img src={i.logo} alt={i.id} />
                    </Icon>
                  </button>
                </Item>
              ))}
            </Slider>
          </div>
        </Container>
      </ProjectsStyle>
    </Section>
  );
}
