import * as React from "react";
import { IMessagePos } from "../wrapper";
import styled from "styled-components";
import is from "styled-is";
import { FormItem } from "../form-item";
import { Input } from "../input";
import { Flex } from "../flex";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useServer from "../../hooks/server/server";

export interface IAddMessageProps extends IMessagePos {
  show: boolean;
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export function AddMessage(props: IAddMessageProps) {
  const { socket, state, dispatch } = useServer();

  const { x, y } = props;

  const [form, setForm] = useState({ nickname: "", message: "", hasNickname: false });

  useEffect(() => {
    console.log("state", state);
    setForm((prevState) => ({ ...prevState, nickname: state.nickname, hasNickname: !!state.nickname }));
  }, [state]);

  function sendMessage() {
    let user = state;
    user.nickname = form.nickname;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "save", payload: user });
    socket.emit("send-message", { ...form, uuid: user.uuid, mousePos: { x, y } });
    props.setShowMessage(false);
  }

  const onChange = (input, e) => setForm((state) => ({ ...state, [input]: e.target.value }));

  return (
    <AddMessageStyle show={props.show} style={{ top: y, left: x }}>
      {props.show && (
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
