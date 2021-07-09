import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Babel } from "../babel";
import { Container } from "../container";
import { Flex } from "../flex";
import { CustomCursorContext } from "../magic-cursor";
import { Avatar, FullBannerDescription, FullBannerStyle, ScrollDown, TagList } from "./fullbanner.style";

export interface IFullBannerProps {}

export function FullBanner(props: IFullBannerProps) {
  const { setType } = useContext(CustomCursorContext);

  return (
    <FullBannerStyle>
      <Container>
        <Flex centeredY columnMd>
          <Avatar>
            <img alt="brain" src="/images/me.jpg" width={220} height={220} />
          </Avatar>
          <FullBannerDescription onMouseEnter={() => setType("hamburger")} onMouseLeave={() => setType("default")}>
            <Flex center style={{ flexWrap: "wrap" }}>
              <h1>Lucas Ribeiro - Frontend developer</h1>
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
              My name is Lucas Ribeiro, I'm {new Date().getFullYear() - 1992} years old, single, Brazilian and currently
              I live in Alto de Pinheiros in São Paulo. I am passionate about technology and programming, I have{" "}
              {new Date().getFullYear() - 2016} year career as a JavaScript developer. I believe that a good developer,
              in addition to technology knowledge, must have interest in business rule.
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
        <ScrollDown>
          <a href="/#about">
            <span>scroll down</span>
            <FontAwesomeIcon icon="chevron-down" />
          </a>
        </ScrollDown>
      </Container>
    </FullBannerStyle>
  );
}
