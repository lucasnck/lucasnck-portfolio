import * as React from "react";
import { useCallback, useState } from "react";
import { Button } from "../button";
import { Container } from "../container";
import { Flex } from "../flex";
import { Section } from "../section";
import { Slider } from "../slider";
import { Text } from "../text";
import { DescriptionContainer, Icon, Item, ProjectsStyle, SelectedProject } from "./style";

export interface ISkillsProps {}

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

const projects = [
  {
    id: "appbtgmaisbusiness",
    logo: "/images/btgmaisbusiness.svg",
    url: "https://app.btgmaisbusiness.com",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    title: (
      <>
        Platform <br /> BTG+ Business
      </>
    ),
    description: (
      <>
        Modular platform for customers, administrative/operation and partners. <br />
        <p>
          technologies: JavaScript, React, Vanilla, NextJS, AWS, Azure DevOps, jQuery, Bootstrap, SmartAdmin, Webpack,
          NodeJS, ANTD, Rest APIs, DevExtreme, Git Submodules, Micro-frontend, multirepo, monorepo, npm, yarn, git,
          CSS3/SASS, styled-components, NextJS, CMS, SCRUM.
        </p>
      </>
    ),
  },
  {
    id: "precatoriosbrasil",
    logo: "/images/precatoriosbrasil.svg",
    url: "https://app.precatoriosbrasil.com/",
    background: "linear-gradient(-45deg,#6d1ecd,#4000bf,#00319a,#0081f0)",
    title: (
      <>
        Platform <br /> Precatórios Brasil
      </>
    ),
    description: (
      <>
        <p>
          technologies: JavaScript, React, Vanilla, NextJS, AWS, Azure DevOps, jQuery, Bootstrap, SmartAdmin, Webpack,
          NodeJS, ANTD, Rest APIs, DevExtreme, Git Submodules, Micro-frontend, multirepo, monorepo, npm, yarn, git,
          CSS3/SASS, styled-components, NextJS, CMS, SCRUM.
        </p>
      </>
    ),
  },
  {
    id: "leveros",
    logo: "/images/leveros.svg",
    url: "https://www.leveros.com.br/",
    background: "linear-gradient(-45deg,#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF)",
    title: (
      <>
        E-commerce <br /> Leveros
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance, VTEX.
      </>
    ),
  },
  {
    id: "btgmaisbusiness",
    logo: "/images/btgmaisbusiness.svg",
    url: "https://btgmaisbusiness.com.br",
    background: "linear-gradient(-45deg,#32323b,#616577,#63a0e4,#343434)",
    title: (
      <>
        Institutional Portal <br /> BTG+ Business
      </>
    ),
    description: (
      <>
        technologies: NextJS 10/11, React, TypeScript, GTM, Optimize, Analytics, Styled-Components, CSS3/SASS, React
        Hook Form, Static Website, AWS, Azure DevOps, CloudFront, S3, Route53, Git, Yarn.{" "}
      </>
    ),
  },
  {
    id: "walfanger",
    logo: "/images/walfange.png",
    url: "https://www.walfanger.com.br/",
    title: (
      <>
        E-commerce <br /> Walfanger
      </>
    ),
    description: <>technologies: Angular, Boostrap, CSS3/SASS, TypeScript, JavaScript, ECMAScript, Idealeware</>,
  },
  {
    id: "viewtech",
    logo: "/images/viewtech.png",
    url: "https://www.viewtech.ind.br/",
    background: "linear-gradient(-45deg,#32323b,#616577,#80CB59,#f5f5f5)",
    title: (
      <>
        E-commerce <br /> ViewTech
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance, Loja Integrada.
      </>
    ),
  },
  {
    id: "berve",
    logo: "/images/berve.png",
    url: "https://www.berve.com.br/",
    background: "linear-gradient(-45deg,#810b0b,#501d28,#5c1c2a,#8f2525)",
    title: (
      <>
        E-commerce <br /> Berve Enxovais
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance, Loja Integrada.
      </>
    ),
  },
  {
    id: "gorilashield",
    logo: "/images/gorila-shield.png",
    url: "https://www.gorilashield.com.br/",
    background: "linear-gradient(-45deg,#403a47,#211c2b,#2a303d,#4c5863)",
    title: (
      <>
        E-commerce <br /> Gorila Shield
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance, Loja Integrada.
      </>
    ),
  },
  {
    id: "bloglojacuba",
    logo: "/images/loja-cuba.png",
    url: "https://blog.lojacuba.com.br/",
    background: "linear-gradient(-45deg,#bd1685,#bd1685,#bd1685,#bd1685)",
    title: (
      <>
        Blog <br /> Loja Cuba
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, PHP, GIT, SEO, Performance, Wordpress.
      </>
    ),
  },
  {
    id: "flordecoco",
    logo: "/images/flor-de-coco.png",
    background: "linear-gradient(-45deg,#525252,#525252,#525252,#525252)",
    title: (
      <>
        E-commerce <br /> Flor de Coco
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance, Loja Integrada.
      </>
    ),
  },
  {
    id: "dupe",
    logo: "/images/dupe.png",
    background: "linear-gradient(-45deg,#525252,#525252,#525252,#525252)",
    title: (
      <>
        E-commerce <br /> Dupé Calçados
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance, Loja Integrada.
      </>
    ),
  },
  {
    id: "candyloverstore",
    logo: "/images/candyloverstore.png",
    url: "https://www.candyloverstore.com.br/",
    background: "linear-gradient(-45deg,#00a0a4,#70c5c3,#ffdf2b,#fccf42)",
    title: (
      <>
        E-commerce <br /> Candy Lover Store
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance, Loja Integrada.
      </>
    ),
  },
  {
    id: "pitangasp",
    logo: "/images/pitanga-sp.png",
    background: "linear-gradient(-45deg,#525252,#525252,#525252,#525252)",
    title: (
      <>
        E-commerce <br /> Loja Pitanga
      </>
    ),
    description: (
      <>
        technologies: JavaScript, React, NodeJS, jQuery, Graphql, Apollo Client, TypeScript, CSS3/SASS, Gulp, Babel,
        Rest APIs, GTM, Google Analytics, Optimize, HTML5, Mobile First, GIT, SEO, Performance, Tray.
      </>
    ),
  },
  {
    id: "projectparser",
    logo: "/images/projectparser.png",
    background: "linear-gradient(-45deg,#525252,#525252,#525252,#525252)",
    title: (
      <>
        Library <br /> Project Parser
      </>
    ),
    description: <>technologies: Java, Java Reflection API, AST (Abstract Syntax Tree), Recursive Methods.</>,
  },
  {
    id: "exparser",
    logo: "/images/repo.svg",
    background: "linear-gradient(-45deg,#525252,#525252,#525252,#525252)",
    title: (
      <>
        Library <br /> eXparser
      </>
    ),
    description: <>technologies: Java, Java Reflection API, AST (Abstract Syntax Tree), Recursive Methods.</>,
  },
  {
    id: "IDE Online - Artifact Generator",
    logo: "/images/repo.svg",
    background: "linear-gradient(-45deg,#525252,#525252,#525252,#525252)",
    title: (
      <>
        Platform <br /> IDE Online
      </>
    ),
    description: (
      <>
        technologies: Java, Java Reflection API, JSF, Bootstrap, Drag and Drop, jQuery, JavaScript, CSS3, HTML5,
        PostgreSQL, Hibernate, Criteria API, JPA, MVC, Git, AST (Abstract Syntax Tree), Recusive Methods.
      </>
    ),
  },
];

export function Projects(props: ISkillsProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(projects[0]);
  const [loading, setLoading] = useState(true);

  const changeProject = useCallback((i) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelectedProject(i);
    }, 800);
  }, []);

  return (
    <Section id="projects">
      <ProjectsStyle>
        <Container>
          <Flex column centeredY style={{ marginBottom: "1rem" }}>
            <Text type="primary" as="h2" align="center" fontSize="32px">
              Projects
            </Text>
            <Text type="text-light" as="p" align="center" fontSize="18px">
              Projects I've worked on. Some projects may be different from when I worked with them.
            </Text>
          </Flex>
          <Flex rowMd center columnReverseXs>
            <Flex column start>
              <DescriptionContainer loading={loading}>
                <Text as="h3" type="primary" fontSize="40px" transform="uppercase">
                  {selectedProject.title}
                </Text>
                <Text as="p" type="text-light">
                  {selectedProject.description}
                </Text>
                <Button
                  as="a"
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  type="primary"
                  skewed
                  outlined
                  disabled={!selectedProject.url}
                >
                  <span>visit</span>
                </Button>
              </DescriptionContainer>
            </Flex>

            <Flex column center>
              <SelectedProject background={selectedProject.background} loading={loading}>
                <img alt={selectedProject.title} src={selectedProject.logo} alt={selectedProject.id} />
              </SelectedProject>
            </Flex>
          </Flex>
          <div id="projects-list" style={{ marginTop: "4rem" }}>
            <Text as="p" type="text-light">
              Select project:
            </Text>
            <Slider {...settings}>
              {projects.map((i) => (
                <Item key={i.id}>
                  <button type="button" onClick={() => changeProject(i)}>
                    <Icon selected={selectedProject.id === i.id}>
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
function changed() {
  throw new Error("Function not implemented.");
}
