import * as React from "react";
import styled from "styled-components";
import { Flex } from "../flex";
import { Text } from "../text";
import useMessages from "../../hooks/messages/messages";

export interface IMessagesProps {}

const MessageStyle = styled.div`
  position: absolute;
`;

const MessageContent = styled.div`
  background-color: #7a27e0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  border-top-left-radius: 0;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 30%);
  position: absolute;
  width: auto;
  height: auto;
  z-index: 99;
  visibility: visible;
  opacity: 1;
  opacity: 0.5;
`;

const Avatar = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  overflow: hidden;
  margin-right: 0.4rem;
  border: 2px solid #741edd;
  border-radius: 50%;
  img {
    position: absolute;
    min-height: auto;
    width: 20px;
    height: 20px;
    left: -2px;
    top: -2px;
  }
`;

export function Messages(props: IMessagesProps) {
  const { messages } = useMessages();

  return (
    <MessageStyle>
      {messages.map((m, i) => (
        <MessageContent key={i} style={{ top: m.mousePos.y, left: m.mousePos.x, position: "fixed" }}>
          <Flex center>
            <Flex center>
              <Avatar>
                <img src="/images/anon.jpg" width="50px" height="50px" />
              </Avatar>
              <div>
                <Text type="light" fontSize="9px">
                  {m.nickname}:{" "}
                </Text>
                <div style={{ lineHeight: "11px" }}>
                  <Text as="div" type="light" fontSize="10px" style={{ maxWidth: "10rem", wordBreak: "break-all" }}>
                    {m.message}
                  </Text>
                </div>
              </div>
            </Flex>
          </Flex>
        </MessageContent>
      ))}
    </MessageStyle>
  );
}
