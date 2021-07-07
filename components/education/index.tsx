import * as React from "react";
import { Container } from "../container";
import { Flex } from "../flex";
import { Section } from "../section";
import { EducationList, EducationStyle } from "./education.style";
import { Text } from "../text";

export interface IEducationProps {}

export function Education(props: IEducationProps) {
  return (
    <Section id="education">
      <EducationStyle hovered>
        <Container>
          <Flex columnMd>
            <div style={{ width: "100%", flex: "1 1 0" }}>
              <Text as="h2" style={{ marginBottom: "2rem" }} fontSize="3rem">
                Education and <br /> Articles
              </Text>
            </div>
            <div style={{ flex: "1 1 0" }}>
              <EducationList>
                <li>
                  <div>
                    <h3>FATEC - Systems Development</h3>
                    <p>
                      The Systems Analysis and Development Technologist analyzes, designs, documents, specifies, tests,
                      implements and maintains computer information systems. This professional also works with
                      computational tools, computer equipment and project methodology in the production of systems.
                      Logical reasoning, use of programming languages and project construction methodologies, concern
                      with quality, usability, robustness, integrity and security.
                    </p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Article - Web Artifacts Generator support IDE Desktop</h3>
                    <p>
                      2º Etapa Internacional do 24º Simpósio Internacional de Iniciação Científica e Tecnológica da USP
                      - SIICUSP
                    </p>
                    <p>
                      This work presents a web artifacts generator that with modeling, forms and drag and drop elements,
                      facilitates the development of JavaServer Faces (JSF) applications, automating the generator of
                      major artifacts based on this architecture: ManagedBeans, Data Access Object (DAO), User
                      Interfaces and JPA Persistence Entities. This tools uses the concepts of Fluent Interface and
                      Abstract Syntax Tree (AST). A autenticidade deste documento pode ser verificada na página da
                      Universidade de São Paulo http://uspdigital.usp.br/webdoc
                    </p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Article - Gerador de Artefatos e Projetos Web</h3>
                    <p>II Congresso de Iniciação Científica e Tecnológica Fatec Lins</p>
                    <p>
                      O presente trabalho apresenta uma ferramenta web para auxiliar no desenvolvimento de aplicações
                      JavaServer Faces automatizando a geração de artefatos e projetos, por meio de modelagem de
                      entidades e relacionamentos, preenchimento de formulários e a utilização de elementos
                      Drag-and-Drop. Os artefatos produzidos são baseados na arquitetura JSF: ManagedBeans, Entidades de
                      Persistência, Data Access Object (DAO) e Interfaces de Usuário e tal ferramenta faz uso de
                      conceitos de Fluent Interfaces e Abstract Syntax Tree (AST). Os artefatos produzidos podem ser
                      utilizados em aplicações Web e o seu funcionamento é satisfatório. Palavras-chave:JAVASERVER
                      FACES; GERADOR DE ARTEFATOS; AUTOMATIZAÇÃO DE CÓDIGO; SISTEMAS WEB
                    </p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Article - Gerador de Artefatos Web compatível com IDE Desktop</h3>
                    <p>1º Etapa do 24º Simpósio Internacional de Iniciação Científica e Tecnológica da USP - SIICUSP</p>
                    <p>
                      Este trabalho apresenta um gerador de artefatos web que, por meio de modelagem, formulários e
                      elementos drag and drop, facilitando o desenvolvimento de aplicações JavaServer Faces (JSF),
                      automatizando a geração dos principais artefatos de uma aplicação baseada nessa arquitetura:
                      ManagedBeans, Data Access Object (DAO), interfaces de usuário e as Entidades de Persistência JPA.
                      Tal ferramenta faz uso de conceitos de Fluent Interface e Abstract Syntax Tree (AST).
                    </p>
                  </div>
                </li>
              </EducationList>
            </div>
          </Flex>
        </Container>
      </EducationStyle>
    </Section>
  );
}
