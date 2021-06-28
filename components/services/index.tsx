import * as React from "react";
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
          </Flex>
          <Slider {...settings}>
            <ServiceItem>
              <div>
                <h2>E-commerce Development</h2>
                <p>
                  Desenvolvimento e manutenção especializado em <Mark type="secondary">e-commerce</Mark>, potendo te
                  ajudar com construção de ferramentas para <Mark type="secondary">alavancar vendas</Mark>,
                  desenvolviento de lojas completas, configurações em plataformas, adicionando funcionalidades e
                  ferramentas de marketplace, retire na loja, organização de loja, tagueamento para SEO, testes A/B,
                  correções de problemas, melhorias, entre outros.
                </p>
                <p>
                  As plataformas que já atuei são: <Mark type="secondary">VTEX</Mark>, Loja Integrada, Woocommerce,
                  tray, Idealeware, entre outras.
                </p>
              </div>
            </ServiceItem>
            <ServiceItem>
              <div>
                <h2>Static Websites and Blogs</h2>
                <p>
                  Desenvolvimento e manutenção com <Mark type="secondary">alta tecnologia</Mark> e eficiência, na
                  plataforma Wordpress ou do zero com
                  <Mark type="secondary">NextJS</Mark>, auxiliando com tagueamento para SEO e adição de ferramentas de
                  monitoração de comportamento de usuário e integração com APIs.
                </p>
                <p>
                  É possível criar a página para sua empresa com <Mark type="secondary">Wordpress</Mark> ou a tecnologia
                  NextJS e Gatsby, em conjunto com uma solução de <Mark type="secondary">CMS</Mark>
                </p>
              </div>
            </ServiceItem>
            <ServiceItem>
              <div>
                <h2>Front-end Development and Architeture</h2>
                <p>
                  Desenvolvimento e arquitetura de projetos Front-end utilizando MF (Micro Front-end). Posso lhe ajudar
                  organizando sua estrutura de projeto e visando suas necessidades para implantação de alta tecnologia
                  para melhorar a performance de desenvolvimento do seu time.
                </p>
              </div>
            </ServiceItem>
          </Slider>
        </Container>
      </ServiceStyle>
    </Section>
  );
}
