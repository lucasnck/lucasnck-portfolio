import styled from "styled-components";

export const AboutStyle = styled.div`
  /* padding: 0 1rem; */
  margin-bottom: 5rem;
  box-sizing: border-box;
  margin-right: 1rem;
  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 0;
    margin-right: 0rem;
  }
  .about-center {
    width: 100%;
    margin: 0 auto;
    border: 2px solid #4514a7;
    transform: skew(${(props) => props.theme.skew.xs});
    margin: 0 auto;
    @media (min-width: ${(props) => props.theme.screen.sm}) {
      width: 90%;
      transform: skew(${(props) => props.theme.skew.sm});
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      width: 70%;
      transform: skew(${(props) => props.theme.skew.md});
    }
    @media (min-width: ${(props) => props.theme.screen.lg}) {
      width: 65%;
      transform: skew(${(props) => props.theme.skew.lg});
    }
    @media (min-width: ${(props) => props.theme.screen.xl}) {
      width: 60%;
      transform: skew(${(props) => props.theme.skew.xl});
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
    transform: skew(-${(props) => props.theme.skew.xs});
    padding: 1rem 0.5rem 2rem 2.5rem;
    box-sizing: border-box;
    color: #ffffff;

    @media (min-width: ${(props) => props.theme.screen.sm}) {
      transform: skew(-${(props) => props.theme.skew.sm});
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      transform: skew(-${(props) => props.theme.skew.md});
    }
    @media (min-width: ${(props) => props.theme.screen.lg}) {
      padding: 2rem 3rem 3rem 4rem;
      transform: skew(-${(props) => props.theme.skew.lg});
    }
    @media (min-width: ${(props) => props.theme.screen.xl}) {
      transform: skew(-${(props) => props.theme.skew.xl});
    }
  }

  button {
    display: block;
    margin: 0 auto;
  }
`;
