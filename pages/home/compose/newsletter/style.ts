import styled from "styled-components";

export const NewsletterStyle = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  background-color: #0b0b0e;
  position: relative;
`;

export const NewsletterSkewed = styled.div`
  height: 200px;
  width: 100%;
  position: absolute;
  top: -100px;
  left: 0;
  transform: matrix(1, -0.105104, 0, 1, 0, -0.35);
  background-color: #0b0b0e;
`;

export const NewsletterForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 0 5rem;
  }
`;
