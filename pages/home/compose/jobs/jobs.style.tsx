import styled from "styled-components";

export const JobsStyle = styled.div`
  margin-top: 5rem;
  .slick-current div {
    opacity: 1;
    .header {
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      span {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const JobItem = styled.div`
  padding: 0;
  outline: none;
  opacity: 0.5;
  .header {
    height: 30px;
    border-bottom: 1px solid rgb(61 57 82);
    margin-bottom: 2rem;
  }
  > div > div {
    background-color: #252331;
    color: #ffffff;
    padding-left: 5px;
    padding-right: 20px;
    position: relative;
    p {
      font-size: 12px;
    }
  }

  h3 {
    height: 60px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
