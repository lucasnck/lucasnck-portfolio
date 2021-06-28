import styled from "styled-components";

export const FullBannerStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
  margin-bottom: 5rem;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  flex-basis: 120px;
  overflow: hidden;
  flex-shrink: 0;
  margin-bottom: 2rem;
  div {
    overflow: initial !important;
    img {
      left: -60px !important;
      @media (min-width: ${(props) => props.theme.screen.md}) {
        left: -30px !important;
      }
      margin: 0 !important;
    }
  }

  border: 2px solid ${(props) => props.theme.colors.primary};
  transform: skew(${(props) => props.theme.skew.xs});
  @media (min-width: ${(props) => props.theme.screen.sm}) {
    transform: skew(${(props) => props.theme.skew.sm});
  }
  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 0;
    transform: skew(${(props) => props.theme.skew.md});
    height: 160px;
    flex-basis: 160px;
  }
  > * {
    transform: skew(-${(props) => props.theme.skew.xs});
    @media (min-width: ${(props) => props.theme.screen.sm}) {
      transform: skew(-${(props) => props.theme.skew.sm});
    }
    @media (min-width: ${(props) => props.theme.screen.md}) {
      transform: skew(-${(props) => props.theme.skew.md});
    }
  }
  img {
    position: absolute;
    height: auto;
    width: 160px;
    left: -33px;
    @media (min-width: ${(props) => props.theme.screen.md}) {
      width: 205px;
    }
  }
`;

export const FullBannerDescription = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding-left: 4rem;
  }
  h1 {
    font-size: 22px;
  }
  h1,
  p {
    color: ${(props) => props.theme.colors.default};
  }
  p {
    background-color: rgb(36 33 42 / 45%);
  }
`;

export const TagList = styled.ul`
  margin-right: 2rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  li {
    margin-right: 1rem;
    margin-bottom: 1rem;
    @media (min-width: ${(props) => props.theme.screen.md}) {
      margin-bottom: 0;
    }
  }
`;
