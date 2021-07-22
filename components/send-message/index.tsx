import * as React from "react";
import { IMessagePos } from "../wrapper";
import styled from "styled-components";
import is from "styled-is";
import { FormItem } from "../form-item";
import { Input } from "../input";
import { Flex } from "../flex";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMessages from "../../hooks/messages/messages";

const AddMessageStyle = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  z-index: -1;
  visibility: hidden;
  opacity: 0;
  ${is("show")`
    z-index: 1;
    visibility: visible;
    opacity: 1;
  `}
`;

const MessageContent = styled.div`
  background-color: #121015;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  border-top-left-radius: 0;
  box-shadow: 2px 2px 5px rgb(0 0 0 / 30%); ;
`;

const ButtonStyle = styled(Button)`
  margin-left: 0.5rem;
  flex: 0 1;
  height: 47px;
  flex-basis: 40px;
  color: #741edd;
`;

const InputStyle = styled(Input)`
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
`;

export function AddMessage() {
  const { form, showSendMessage, x, y, onChange, sendMessage } = useMessages();

  return (
    <AddMessageStyle show={showSendMessage} style={{ top: y, left: x }}>
      {showSendMessage && (
        <MessageContent>
          <Flex center>
            <div>
              {!form.hasNickname && (
                <FormItem id="nickname">
                  <InputStyle
                    value={form.nickname}
                    onChange={(e) => onChange("nickname", e)}
                    colorType="primary"
                    name="comment-nickname"
                    placeholder="nickname"
                  />
                </FormItem>
              )}
              <Flex center>
                <FormItem id="message" style={{ marginBottom: "0" }}>
                  <InputStyle
                    value={form.message}
                    onChange={(e) => onChange("message", e)}
                    colorType="secondary"
                    name="comment-message"
                    placeholder="comment here"
                  />
                </FormItem>
                <ButtonStyle onClick={sendMessage}>
                  <FontAwesomeIcon icon="paper-plane" height="20px" />
                </ButtonStyle>
              </Flex>
            </div>
          </Flex>
        </MessageContent>
      )}
    </AddMessageStyle>
  );
}
