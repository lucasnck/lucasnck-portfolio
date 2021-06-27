import * as React from "react";
import { Container, Flex } from "../../../../components";
import { Avatar, FullBannerDescription, FullBannerStyle, TagList } from "./fullbanner.style";
import Image from "next/image";
import { Babel } from "../../../../components/babel";
import { useContext } from "react";
import { CustomCursorContext } from "../../../../components/magic-cursor";

export interface IFullBannerProps {}

export default function FullBanner(props: IFullBannerProps) {
  const { setType } = useContext(CustomCursorContext);

  return (
    <FullBannerStyle>
      <Container>
        <Flex centeredY column-sm>
          <Avatar>
            <Image
              alt="brain"
              src="/images/me.jpg"
              layout="fixed"
              objectFit="inherit"
              quality={100}
              width={220}
              height={220}
            />
          </Avatar>
          <FullBannerDescription onMouseEnter={() => setType("hamburger")} onMouseLeave={() => setType("default")}>
            <h1>Lucas Ribeiro - Frontend developer</h1>
            <p>
              Meu nome é Lucas Ribeiro, tenho {new Date().getFullYear() - 1992} anos, solteiro, brasileiro e atualmente
              moro em Alto de Pinheiros em São Paulo. Sou apaixonado por tecnologia e programação, tenho carreira como
              dev JavaScript fazem {new Date().getFullYear() - 2016} anos. Acredito que um bom desenvolvedor além do
              conhecimento em tecnologia deve ter interesse pelo Business Logic envolvido.
            </p>
            <TagList>
              <li>
                <Babel type="secondary">
                  <span>React</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>Java</span>
                </Babel>
              </li>

              <li>
                <Babel type="secondary">
                  <span>TypeScript</span>
                </Babel>
              </li>

              <li>
                <Babel type="secondary">
                  <span>NodeJS</span>
                </Babel>
              </li>

              <li>
                <Babel type="secondary">
                  <span>JavaScript</span>
                </Babel>
              </li>

              <li>
                <Babel type="secondary">
                  <span>AWS</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>Angular</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>Azure DevOps</span>
                </Babel>
              </li>
            </TagList>
          </FullBannerDescription>
        </Flex>
      </Container>
    </FullBannerStyle>
  );
}
