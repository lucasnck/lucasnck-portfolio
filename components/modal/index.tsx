import * as React from "react";
import { Button } from "../button";
import { Flex } from "../flex";
import { ModalContent, ModalOverlay, ModalStyle } from "./style";

export interface IModalProps {
  show: boolean;
  toggle: () => void;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const {show, toggle} = props
  return (
    <>
      <ModalOverlay show={show} onClick={toggle} />
      <ModalStyle show={show}>
        <div>
          <ModalContent>
            <Flex end>
              <Button onClick={toggle}>
                <span>X</span>
              </Button>
            </Flex>
            {props.children}
          </ModalContent>
        </div>
      </ModalStyle>
    </>
  );
};

export * from "./hook";
