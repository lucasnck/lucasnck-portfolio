import styled from "styled-components";
import SlickSlider from "react-slick";

export const Slider = styled(SlickSlider)`
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;
  }
  .slick-slide > div {
    height: 100%;
  }
  .slick-dots {
    bottom: -3rem;
    li {
      button {
        height: 3px;
        width: 25px;
        padding: 0;
        &:before {
          background-color: ${(props) => props.theme.colors.secondary};
          border-radius: 0;
          height: 4px;
          width: 25px;
          content: "";
          font-family: none;
          -webkit-font-smoothing: none;
          opacity: 0.5;
        }
      }
      &.slick-active {
        button {
          &:before {
            background-color: ${(props) => props.theme.colors.primary};
            opacity: 1;
          }
        }
      }
    }
  }
`;
