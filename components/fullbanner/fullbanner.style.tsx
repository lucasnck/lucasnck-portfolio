import styled from "styled-components";

export const FullBannerStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  padding-top: 8rem;
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    min-height: 100vh;
    align-items: center;
    padding-top: 3rem;
  }
  margin-bottom: 5rem;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  flex-basis: 120px;
  overflow: hidden;
  flex-shrink: 0;
  margin-bottom: 2rem;
  position: relative;
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
    transform: skew(${(props) => props.theme.skew.md});
  }
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    transform: skew(${(props) => props.theme.skew.lg});
  }
  @media (min-width: ${(props) => props.theme.screen.xl}) {
    transform: skew(${(props) => props.theme.skew.xl});
  }
  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 0;
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
    @media (min-width: ${(props) => props.theme.screen.lg}) {
      transform: skew(-${(props) => props.theme.skew.lg});
    }
    @media (min-width: ${(props) => props.theme.screen.xl}) {
      transform: skew(-${(props) => props.theme.skew.xl});
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
    @media (min-width: ${(props) => props.theme.screen.md}) {
      flex: 0 0 auto;
      margin-right: 1rem;
    }
  }
  h1,
  p {
    color: ${(props) => props.theme.colors.default};
  }
  p {
    background-color: rgb(36 33 42 / 85%);
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

export const ScrollDown = styled.div`
  text-align: center;
  margin: 5rem auto 0 auto;
  color: #fff;
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
  svg {
    width: 14px;
    margin: 0 auto;
  }
`;
