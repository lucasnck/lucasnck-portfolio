import styled from "styled-components";

export const Mark: React.FC<{ type }> = ({ children, type }) => {
  const pos1 = Math.floor(Math.random() * 11);
  const pos2 = Math.floor(Math.random() * 10);

  return (
    <MarkStyle pos1={pos1} pos2={pos2} type={type}>
      {children}
    </MarkStyle>
  );
};

export const MarkStyle = styled.span`
  position: relative;
  z-index: 1;
  display: inline-block;
  &:after {
    content: "";
    width: 100%;
    height: 95%;
    background-color: ${(props) => props.theme.colors[props.type]};
    position: absolute;
    left: ${(props) => props.pos1 - 2}px;
    z-index: -1;
    transform: rotate(-${(props) => props.pos1}deg);
  }
  &:before {
    content: "";
    width: 100%;
    height: 95%;
    background-color: ${(props) => props.theme.colors[props.type]};
    position: absolute;
    left: -${(props) => props.pos2}px;
    z-index: -1;
    transform: rotate(${(props) => props.pos1}deg);
  }
`;
