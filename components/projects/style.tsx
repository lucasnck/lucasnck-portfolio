import styled from "styled-components";
import is, { isNot } from "styled-is";

export const ProjectsStyle = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
  padding-top: 10rem;
  background-color: #252330;
  position: relative;
  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-top: 0;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 2rem;
  @media (min-width: ${(props) => props.theme.screen.md}) {
    p {
      width: 50%;
    }
  }
`;

export const Item = styled.div`
  color: ${(props) => props.theme.colors.light};
  text-align: center;
  position: relative;
  button {
    background-color: transparent;
    border: none;
    display: block;
    position: relative;
    margin: 0 auto;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  max-width: 120px;
  height: 2rem;
  border-radius: 50%;
  ${isNot("selected")`
    filter: opacity(0.4) grayscale(1);
  `}
  img {
    display: block;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const DescriptionContainer = styled.div`
  margin-left: 0;
  opacity: 1;
  animation: fadeToRight 0.3s ease-in;

  h3 {
    font-size: 1.5rem;
  }
  @media (min-width: ${(props) => props.theme.screen.md}) {
    h3 {
      font-size: 3rem;
    }
  }

  ${is("loading")`
    -webkit-animation-name: fadeToLeft;
    -webkit-animation-duration: 0.8s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease;
  `}

  @keyframes fadeToRight {
    from {
      margin-left: -2rem;
      opacity: 0;
    }
    to {
      margin-left: 0;
      opacity: 1;
    }
  }

  @keyframes fadeToLeft {
    from {
      margin-left: 0;
      opacity: 1;
    }
    to {
      margin-left: -2rem;
      opacity: 0;
    }
  }
`;

export const SelectedProject = styled.div`
  background-color: #000;
  width: 10rem;
  height: 10rem;
  margin-bottom: 3rem;
  @media (min-width: ${(props) => props.theme.screen.md}) {
    width: 20rem;
    height: 20rem;
    margin-bottom: 0;
  }
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    transform: rotate(-12deg);
    width: calc(100% + 4rem);
    position: absolute;
    animation: fadeIn 0.1s ease-in;
    ${is("loading")`
      -webkit-animation-name: fadeOut;
      -webkit-animation-duration: 0.4s;
      -webkit-animation-iteration-count: 1;
      -webkit-animation-timing-function: ease;
    `}

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }

  background: ${(props) => props.background};
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  ${is("loading")`
    -webkit-animation-name: fadeToRight;
    -webkit-animation-duration: 0.9s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
  `}
`;
