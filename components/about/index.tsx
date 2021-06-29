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
                Nascido em outubro de 1992, cresci completamente envolvido por tecnologia. <br />
                Meu primeiro contato com <Mark type="secondary">progração</Mark> foi aos 12 anos fazendo scripts simples
                para BOTs, modificando scripts .lua, criando meus próprios servidores de jogos e criando páginas falsas
                para hacking de contas de jogos. Meu primeiro contato com{" "}
                <Mark type="secondary">desenvolvimento web</Mark> foi codificando templates para blogs no site Tumblr e
                disponibilizando gratuitamente na rede social. <br /> No ensino médio estudei em escola de tecnologia e
                informação durante um período. Em 2013 iniciei na graduação de Desenvolvimento de Sistemas. Meu{" "}
                <Mark type="secondary">trabalho científico</Mark>
                para conclusão do curso foi o sobre Gerador de artefatos web o que me rendeu 3 artigos publicados.{" "}
                <br />
                Inicei como desenvolvedor na linguagem <Mark type="secondary">Java</Mark>, implementando um sistema web
                de ERP para agropecuária. Fiz estágio na faculdade como desenvolvedor{" "}
                <Mark type="secondary">front-end</Mark> e desde então construo carreira na área, atuando
                majoritariamente com <Mark type="secondary">e-commerce</Mark>, mas também aplicando meus conhecimentos
                na área financeira.
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
