import * as React from "react";
import { Container } from "../container";
import { Flex } from "../flex";
import { Section } from "../section";
import { EducationList, EducationStyle } from "./education.style";
import { Text } from "../text";
import { Badge } from "../babel";
import { TagList } from "../fullbanner/fullbanner.style";

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
                    <h3>Graduation - Systems Development</h3>
                    <Text as="h4" type="text-light">
                      Technology College - 2016
                    </Text>
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
                    <Text as="h4" type="text-light">
                      2nd International Stage of the 24th International Symposium on Scientific and Technological
                      Initiation at USP - SIICUSP - 2016
                    </Text>
                    <p>
                      This work presents a web artifacts generator that with modeling, forms and drag and drop elements,
                      facilitates the development of JavaServer Faces (JSF) applications, automating the generator of
                      major artifacts based on this architecture: ManagedBeans, Data Access Object (DAO), User
                      Interfaces and JPA Persistence Entities. This tools uses the concepts of Fluent Interface and
                      Abstract Syntax Tree (AST). A autenticidade deste documento pode ser verificada na página da
                      Universidade de São Paulo http://uspdigital.usp.br/webdoc
                      <TagList>
                        <li>
                          <Badge type="secondary">MVC</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">Code Generator</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">Abstract Syntax Tree</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">Fluent Interface</Badge>
                        </li>
                      </TagList>
                    </p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Article - Gerador de Artefatos e Projetos Web</h3>
                    <Text as="h4" type="text-light">
                      II Fatec Lins Scientific and Technological Initiation Congress - 2016
                    </Text>
                    <p>
                      This work presents a web tool to assist in the development (DX) of applications JavaServer Faces
                      automating the generation of artifacts and projects through modeling of entities and
                      relationships, filling out forms and using elements Drag-and-Drop. The artifacts produced are
                      based on the JSF architecture: ManagedBeans, Persistent Entity, Data Access Object (DAO) and User
                      Interfaces and such tool makes use of concepts of Fluent Interfaces and Abstract Syntax Tree
                      (AST). The artifacts produced can be used in web applications and their operation is satisfactory.
                      Keywords:{" "}
                      <TagList>
                        <li>
                          <Badge type="secondary">JAVASERVER FACES</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">ARTIFACT GENERATOR</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">CODE AUTOMATION</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">WEB SYSTEMS</Badge>
                        </li>
                      </TagList>
                    </p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Article - Gerador de Artefatos Web compatível com IDE Desktop</h3>
                    <Text as="h4" type="text-light">
                      1st Stage of the 24th International Symposium on Scientific and Technological Initiation at USP -
                      SIICUSP - 2016
                    </Text>
                    <p>
                      This work presents a generator of web artifacts that through modeling, forms and drag and drop
                      elements, facilitating the development of JavaServer Faces (JSF) applications, automating the
                      generation of the main artifacts of an application based on this architecture: ManagedBeans, Data
                      Access Object (DAO), user interfaces and JPA Persistence Entities. Such tool makes use of Fluent
                      Interface and Abstract Syntax Tree (AST) concepts.
                      <TagList>
                        <li>
                          <Badge type="secondary">JPA</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">ARTIFACT GENERATOR</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">CODE AUTOMATION</Badge>
                        </li>
                        <li>
                          <Badge type="secondary">Web IDE</Badge>
                        </li>
                      </TagList>
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
