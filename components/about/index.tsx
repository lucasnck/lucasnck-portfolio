import * as React from "react";
import { Button } from "../button";
import { Container } from "../container";
import { Mark } from "../mark";
import { Section } from "../section";
import { AboutStyle } from "./about.style";

export interface IAboutProps {}

export function About(props: IAboutProps) {
  return (
    <Section id="about">
      <AboutStyle>
        <Container>
          <div className="about-center">
            <div className="message">
              <h2>About</h2>
              <p>
                Nascido em outubro de 1992, cresci completamente envolvido com tecnologia. <br />
                Meu primeiro contato com <Mark type="secondary">progração</Mark> foi com 12 anos ao criar scripts
                simples de BOTs e servidores de games. Logo depois comecei meu interesse por{" "}
                <Mark type="secondary">desenvolvimento web</Mark> criando templates de blogs para o site Tumblr e
                disponibilizando gratuitamente na rede social, nessa época não sabia que isso poderia se tornar uma{" "}
                <Mark type="secondary">profissão</Mark>. No ensino médio estudei em escola de tecnologia e informação
                durante um período. Em 2013 iniciei na graduação de Desenvolvimento de Sistemas. Meu{" "}
                <Mark type="secondary">trabalho científico</Mark>
                para conclusão do curso foi sobre Gerador de Artefatos Web. <br />
                Inicei como desenvolvedor na linguagem <Mark type="secondary">Java</Mark>, implementando um sistema web
                de ERP para agropecuária. Fiz estágio na faculdade como desenvolvedor{" "}
                <Mark type="secondary">front-end</Mark> e desde então construo carreira na área, atuando com{" "}
                <Mark type="secondary">e-commerce</Mark>, área financeira e desenvolvimento de plataformas.
              </p>
              <div>
                <Button type="primary" outlined skewed>
                  <span>download cv</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </AboutStyle>
    </Section>
  );
}
