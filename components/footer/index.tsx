import * as React from "react";
import { Container } from "../container";
import { Flex } from "../flex";
import { FooterStyle } from "./footer.style";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <FooterStyle>
      <Container>
        <Flex column rowMd spaceBetween>
          <div>
            © 2021 developed by <a href="/#">lucasnck</a>
          </div>
          <div>
            follow on{" "}
            <a href="instagram.com/lucasnck" target="_blank">
              instagram
            </a>
          </div>
        </Flex>
      </Container>
    </FooterStyle>
  );
}
