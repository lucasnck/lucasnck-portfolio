import * as React from "react";
import { Button } from "../button";
import { Flex } from "../flex";
import { ModalContent, ModalOverlay, ModalStyle } from "./style";

export interface IModalProps {
  show: boolean;
  toggle: () => void;
}

export const Modal: React.FC<IModalProps> = (props) => {
  return (
    <>
      <ModalOverlay show={props.show} onClick={props.toggle} />
      <ModalStyle show={props.show}>
        <div>
          <ModalContent>
            <Flex end>
              <Button onClick={props.toggle}>
                <span>
                  <i className="fal fa-times"></i> X
                </span>
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
