import React, { useContext } from "react";
import { Babel } from "../babel";
import { Container } from "../container";
import { Flex } from "../flex";
import { CustomCursorContext } from "../magic-cursor";
import { Avatar, FullBannerDescription, FullBannerStyle, TagList } from "./fullbanner.style";

export interface IFullBannerProps {}

export function FullBanner(props: IFullBannerProps) {
  const { setType } = useContext(CustomCursorContext);

  return (
    <FullBannerStyle>
      <Container>
        <Flex centeredY column-sm>
          <Avatar>
            <img alt="brain" src="/images/me.jpg" width={220} height={220} />
          </Avatar>
          <FullBannerDescription onMouseEnter={() => setType("hamburger")} onMouseLeave={() => setType("default")}>
            <Flex center style={{ flexWrap: "wrap" }}>
              <h1 style={{ flex: "0 0 auto", marginRight: "1rem" }}>Lucas Ribeiro - Frontend developer</h1>
              <Flex className="facebook-like" style={{ flex: "1" }}>
                <iframe
                  title="facebook-like"
                  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Flucasnck.github.io%2F&width=200&layout=button_count&action=like&show_faces=true&share=false&height=65&appId"
                  width="150"
                  height="20"
                  scrolling="no"
                  style={{ border: "none" }}
                />
              </Flex>
            </Flex>
            <p>
              Meu nome é Lucas Ribeiro, tenho {new Date().getFullYear() - 1992} anos, solteiro, brasileiro e atualmente
              moro em Alto de Pinheiros em São Paulo. Sou apaixonado por tecnologia e programação, tenho carreira como
              dev JavaScript fazem {new Date().getFullYear() - 2016} anos. Acredito que um bom desenvolvedor além do
              conhecimento em tecnologia deve ter interesse pelo Business Logic envolvido.
            </p>
            <TagList>
              <li>
                <Babel type="secondary">
                  <span>JavaScript</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>TypeScript</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>React</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>NodeJS</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>Angular</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>Java</span>
                </Babel>
              </li>
              <li>
                <Babel type="secondary">
                  <span>AWS</span>
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
