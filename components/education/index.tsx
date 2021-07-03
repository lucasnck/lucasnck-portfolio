import * as React from "react";
import { Container } from "../container";
import { Flex } from "../flex";
import { Section } from "../section";
import { EducationList, EducationStyle } from "./education.style";

export interface IEducationProps {}

export function Education(props: IEducationProps) {
  return (
    <Section id="education">
      <EducationStyle hovered>
        <Container>
          <Flex columnMd>
            <div style={{ width: "100%" }}>
              <h2 style={{ marginBottom: "2rem" }}>
                Education and <br />
                Projects
              </h2>
            </div>
            <div>
              <EducationList>
                <li>
                  <div>
                    <h3>FATEC - Systems Development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
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
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Article - Gerador de Artefatos e Projetos Web</h3>
                    <p>II Congresso de Iniciação Científica e Tecnológica Fatec Lins</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Article - Gerador de Artefatos Web compatível com IDE Desktop</h3>
                    <p>1º Etapa do 24º Simpósio Internacional de Iniciação Científica e Tecnológica da USP - SIICUSP</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
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
