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
                    Desenvolvimento e manutenção especializada em <Mark type="secondary">e-commerce</Mark>, com o
                    objetivo de <Mark type="secondary">alavancar suas vendas</Mark>. Desenvolviento do zero, adicionando
                    novas melhorias, manutenção/correção, configurações em Platformas como adição de funcionalidades de
                    marketplace, retire na loja, organização de cadastros, performance e velocidade de carregamento,
                    etc. Também atuando com tagueamento para SEO, testes A/B, tagueamento para performance, entre
                    outros.
                  </p>
                  <p>
                    Platformas: <Mark type="secondary">VTEX</Mark>, Loja Integrada, Woocommerce, Tray, Idealeware, entre
                    outras.
                  </p>
                  <p>
                    Tecnologias: React, jQuery, JavaScript, CSS, <Mark type="secondary">GTM</Mark>, Google Analytics,
                    Optimize, Hotjar, entre outras.
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
                    Desenvolvimento e manutenção com <Mark type="secondary">alta tecnologia</Mark> e eficiência,
                    utilizando as tecnologias
                    <Mark type="secondary">NextJS</Mark>, Wordpress, React, TypeScript, entre outras. Marcações para SEO
                    e adição de ferramentas de comportamento de usuário e integração com APIs para adição de
                    funcionalidades.
                  </p>
                  <p>
                    Platformas de <Mark type="secondary">CMS</Mark>, com as tecnologias NextJS ou Gatsby e{" "}
                    <Mark type="secondary">Wordpress</Mark>
                  </p>
                  <p>
                    Tecnologias: React, jQuery, JavaScript, Bootstrap, CSS, <Mark type="secondary">GTM</Mark>, Google
                    Analytics, Optimize, Hotjar, entre outras.
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
                    Estou em constante aprendizado em arquitetura de frontend, mas posso te ajudar com desenvolvimento e
                    tomadas de decisão para <Mark type="secondary">construção de Platforma</Mark>, estrutura e
                    organização de projetos com ESLint, Prettier, padrões de desenvolvimento de componentes, testes,
                    repositórios GIT, MF (Micro-frontend), frameworks, etc.
                  </p>
                  <p>
                    Tecnologias/Conceitos/Frameworks: <Mark type="secondary">React</Mark>, JavaScript, Design System,
                    Style, Angular, VueJS, <Mark type="secondary">NextJS</Mark>, Typescript, Single-spa, Yarn
                    workspaces, Lerna, Vanilla, Multi-repo, Mono-repo, <Mark type="secondary">Azure DevOps</Mark>, AWS,
                    Packages, Multi domain, subdomain, environments, Webpack, ESLint, Prettier, Gulp, React Testing
                    Library, Loaders, Github, <Mark type="secondary">Vercel</Mark>, Gatsby, Git, Bitbucket, Whitelabel,
                    etc{" "}
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
                  <h2>Templates</h2>
                  <p>
                    Estou em constante aprendizado em arquitetura de frontend, mas posso te ajudar com desenvolvimento e
                    tomadas de decisão para <Mark type="secondary">construção de Platforma</Mark>, estrutura e
                    organização de projetos com ESLint, Prettier, padrões de desenvolvimento de componentes, testes,
                    repositórios GIT, MF (Micro-frontend), frameworks, etc.
                  </p>
                  <p>
                    Tecnologias/Conceitos/Frameworks: <Mark type="secondary">React</Mark>, JavaScript, Design System,
                    Style, Angular, VueJS, <Mark type="secondary">NextJS</Mark>, Typescript, Single-spa, Yarn
                    workspaces, Lerna, Vanilla, Multi-repo, Mono-repo, <Mark type="secondary">Azure DevOps</Mark>, AWS,
                    Packages, Multi domain, subdomain, environments, Webpack, ESLint, Prettier, Gulp, React Testing
                    Library, Loaders, Github, <Mark type="secondary">Vercel</Mark>, Gatsby, Git, Bitbucket, Whitelabel,
                    etc{" "}
                  </p>
                </div>
                <div>
                  <Button as="a" type="text-light" href="/#newsletter" mAuto>
                    <span>Add to cart</span>
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
