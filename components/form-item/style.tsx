import styled from "styled-components";

export const FormItemStyle = styled.div`
  margin-bottom: 0.5rem;
`;

export const ErrorMessage = styled.div`
  line-height: 40px;
  height: 40px;
  color: ${props => props.theme.colors.secondary};
`;
