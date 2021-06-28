import styled from "styled-components";
import is, { match } from "styled-is";

export const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  ${is("show")`
    text-align: center;
  `}
  span {
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.default};
    ${match("type", "secondary")`
      color: ${(props) => props.theme.colors.secondary};
    `}
  }
`;
