import styled from "styled-components";

export const EducationStyle = styled.div`
  background: rgb(37, 35, 49);
  background: linear-gradient(180deg, rgba(37, 35, 49, 1) 0%, rgba(20, 19, 27, 1) 100%);
  padding-bottom: 15rem;
  h2 {
    text-transform: uppercase;
    color: #6e25c8;
  }
`;

export const EducationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    color: #fff;
    div h3 {
      color: #6e25c8;
    }
    &:hover p {
      text-decoration: underline;
    }
  }
`;
