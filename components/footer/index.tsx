import * as React from "react";
import { Container } from "../container";
import { Flex } from "../flex";
import { FooterStyle } from "./footer.style";
import { Text } from "../text";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <FooterStyle>
      <Container>
        <Flex column rowMd spaceBetween>
          <Flex centeredX startXMd>
            <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 54 48" fill="none">
              <rect
                x="1.14833"
                y="0.988938"
                width="38"
                height="38"
                transform="matrix(1 0 0.148327 0.988938 7.85331 0.0109393)"
                stroke="#27FCFA"
                strokeWidth="2"
              />
              <rect
                x="1.14004"
                y="0.990146"
                width="38"
                height="38"
                transform="matrix(1 0 0.140037 0.990146 -0.138657 8.00976)"
                stroke="#6E25C8"
                strokeWidth="2"
              />
            </svg>
            <Text as="span" type="light" style={{ marginLeft: "1rem" }}>
              © 2021 developed by{" "}
              <Text as="a" type="light" href="https://linkedin.com/in/lucasnck" target="_blank" rel="noreferrer">
                lucasnck
              </Text>
            </Text>
          </Flex>
          <Flex centeredX endXMd>
            <Text as="span" type="light">
              follow on{" "}
              <Text as="a" type="light" href="https://github.com/lucasnck" target="_blank" rel="noreferrer">
                github
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </FooterStyle>
  );
}
