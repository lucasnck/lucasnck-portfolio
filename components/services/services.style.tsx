import styled from "styled-components";

export const ServiceStyle = styled.div`
  margin-bottom: 5rem;
`;

export const ServiceItem = styled.div`
  padding: 10px;
  outline: none;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 4rem;
  > div {
    background-color: #262432;
    color: #ffffff;
    padding: 35px 40px;
    position: relative;
    border-radius: 8px;
    margin-right: 15px;
    height: 100%;
    box-sizing: border-box;
    &:before {
      content: "";
      width: calc(100% + 5px);
      position: absolute;
      top: calc(50% + 3px);
      left: -2px;
      height: 50%;
      margin: 0px 0 0 0;
      z-index: -1;
      background-color: ${(props) => props.theme.colors.secondary};
      background-image: linear-gradient(0deg, ${(props) => props.theme.colors.secondary} 0%, #262432 100%);
      border-radius: 8px;
    }
  }
`;
