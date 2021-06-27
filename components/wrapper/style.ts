import styled from "styled-components";
import is from "styled-is";

export const WrapperContainer = styled.div``;

export const Content = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  box-shadow: 0 0 20px rgba(black, 0.5);
  transform: translateX(0px);
  transition: transform 0.2s ease;
  z-index: 0;
  ${is("show")`
    transform: translateX(-300px);
		transition: transform 0.2s ease;
  `}
`;
