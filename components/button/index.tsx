import styled from "styled-components";
import is from "styled-is";

export const Button = styled.button`
  min-height: 40px;
  padding: 0 1rem;
  font-size: 16px;
  background-image: none;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid transparent;
  color: #fff;
  display: flex;
  align-items: center;
  width: fit-content;
  outline: none;
  text-decoration: none;
  ${is("type")`
    background-color: ${(props) => props.theme.colors[props.type]};
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors[props.type]};
    border-radius: 4px;
  `}
  ${is("mAuto")`
    margin: 0 auto;
  `}
  ${is("outlined")`
    background-color: transparent;
    color: ${(props) => props.theme.colors[props.type]};
    border: 1px solid ${(props) => props.theme.colors[props.type]};

    

    ${is("disabled")`
      background-color: transparent;
      color: ${(props) => props.theme.colors["text-light"]};
      border: 1px solid ${(props) => props.theme.colors["text-light"]};
    `}
    
  `}
  ${is("skewed")`
    border-radius: 0;
    transform: skew(${(props) => props.theme.skew.xs});
    @media (min-width: ${(props) => props.theme.screen.sm}) {
      transform: skew(${(props) => props.theme.skew.sm});
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      transform: skew(${(props) => props.theme.skew.md});
    }
    @media (min-width: ${(props) => props.theme.screen.lg}) {
      transform: skew(${(props) => props.theme.skew.lg});
    }
    @media (min-width: ${(props) => props.theme.screen.xl}) {
      transform: skew(${(props) => props.theme.skew.xl});
    }
    > * {
      display: block;
      transform: skew(-${(props) => props.theme.skew.xs});
      @media (min-width: ${(props) => props.theme.screen.sm}) {
        transform: skew(-${(props) => props.theme.skew.sm});
      }
      @media (min-width: ${(props) => props.theme.screen.md}) {
        transform: skew(-${(props) => props.theme.skew.md});
      }
      @media (min-width: ${(props) => props.theme.screen.lg}) {
        transform: skew(-${(props) => props.theme.skew.lg});
      }
      @media (min-width: ${(props) => props.theme.screen.xl}) {
        transform: skew(-${(props) => props.theme.skew.xl});
      }
    }
  `}
`;
