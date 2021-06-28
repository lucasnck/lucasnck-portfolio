import styled from "styled-components";
import is from "styled-is";

export interface IFlex {
  column?: boolean;
  columnSm?: boolean;
}

export enum DIRTYPES {
  vertial = "vertical",
  horizontal = "column",
}

export const Flex = styled.div<IFlex>`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    ${is("startXMd")`
    justify-content: start;
  `}
  }
  ${is("centeredX")`
    justify-content: center;
  `}
  ${is("spaceBetween")`
    justify-content: space-between;
  `}
  ${is("centeredY")`
    align-items: center;
  `}
  ${is("column")`
    flex-direction: column;
  `}
  
  @media (min-width: ${(props) => props.theme.screen.md}) {
    ${is("rowMd")`
      flex-direction: row;
    `}
  }
  ${is("column-sm")`
    @media (max-width: ${(props) => props.theme.screen.sm}) {
      flex-direction: column;
    }
  `}
  ${is("center")`
    align-items: center;
  `}
  ${is("end")`
    justify-content: flex-end;
    align-items: end;
  `}

  
  @media (min-width: ${(props) => props.theme.screen.md}) {
    ${is("endXMd")`
      justify-content: flex-end;
      align-items: end;
    `}
  }
`;
