import styled from "styled-components";

export const AboutStyle = styled.div`
  padding: 0 1rem;
  margin-bottom: 5rem;
  box-sizing: border-box;
  @media (min-width: ${(props) => props.theme.screen.sm}) {
    padding: 0;
  }
  .about-center {
    width: 100%;
    margin: 0 auto;
    border: 2px solid #4514a7;
    transform: skew(2deg);
    margin: 0 -15px 0 -15px;
    @media (min-width: ${(props) => props.theme.screen.sm}) {
      transform: skew(${(props) => props.theme.skew.sm});
      margin: 0 auto;
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      width: 50%;
      transform: skew(${(props) => props.theme.skew.md});
    }
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: -14px;
      left: 10px;
      background-color: #24212a;
      border: 2px solid #27fffd;
    }
  }

  .message {
    transform: skew(-2deg);
    padding: 1rem 2.5rem 2rem 2.5rem;
    box-sizing: border-box;
    color: #ffffff;
    @media (min-width: ${(props) => props.theme.screen.sm}) {
      padding: 1rem 3rem 3rem 4rem;
      transform: skew(${(props) => `-${props.theme.skew.sm}`});
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      transform: skew(${(props) => `-${props.theme.skew.md}`});
    }
  }

  button {
    display: block;
    margin: 0 auto;
  }
`;
