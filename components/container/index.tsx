import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  @media (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: ${(props) => props.theme.container.sm};
  }
  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: ${(props) => props.theme.container.md};
  }
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: ${(props) => props.theme.container.lg};
  }
  @media (min-width: ${(props) => props.theme.screen.xl}) {
    max-width: ${(props) => props.theme.container.xl};
  }
  @media (min-width: ${(props) => props.theme.screen.xxl}) {
    max-width: ${(props) => props.theme.container.xxl};
  }
`;
