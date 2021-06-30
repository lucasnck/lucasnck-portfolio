import styled from "styled-components";

export const MagicMouseStyle = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: block;
  }

  .main-cursor,
  .secondary-cursor {
    z-index: 10000;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    position: fixed;
  }

  .main-cursor {
    transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
    animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    mix-blend-mode: difference;
    .main-cursor-background {
      width: 10px;
      height: 10px;
      background: ${(props) => props.theme.colors.dark};
      border-radius: 50%;
    }
  }

  .secondary-cursor {
    width: 20px;
    height: 20px;
    mix-blend-mode: difference;
    transition: all 0.1s linear;
    .cursor-background {
      transition: all 0.5s linear;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: relative;
      opacity: 1;
      transform: scale(0.1);
    }
  }

  &.hamburger {
    .secondary-cursor {
      width: 300px;
      height: 300px;
      .cursor-background {
        background: linear-gradient(0deg, rgba(37, 34, 43, 0.4), rgba(37, 34, 43, 0.9)), url("/images/dev.gif");
        background-size: 350% auto;
        background-position: 35% 15%;
        transform: scale(1);
      }
    }

    .main-cursor-background {
      animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
  }

  &.menu {
    .secondary-cursor {
      /* visibility: visible; */
      width: 80px;
      height: 80px;
      .cursor-background {
        background: #4514a7;
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        /* animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards; */
      }
    }

    .main-cursor-background {
      animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes bgUp {
    from {
      background-color: transparent;
    }

    to {
      background-color: black;
    }
  }

  @keyframes bgDown {
    from {
      background-color: black;
    }

    to {
      background-color: transparent;
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.5);
    }
  }

  @keyframes scaleDown {
    from {
      transform: scale(1.5);
    }

    to {
      transform: scale(1);
    }
  }

  @keyframes translateLeftDot {
    from {
      transform: translate(20px, -50%);
    }

    to {
      transform: translate(0px, -50%);
    }
  }

  @keyframes translateRightDot {
    from {
      transform: translate(-20px, -50%);
    }

    to {
      transform: translate(0px, -50%);
    }
  }
`;
