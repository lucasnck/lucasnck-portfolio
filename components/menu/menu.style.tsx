import styled from "styled-components";
import is from "styled-is";

export const MenuStyle = styled.div`
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 1rem 0;
  background-color: #6e25c8;
  transition: left 0.2s ease;
  z-index: 0;

  ${is("show")`
    right: 0px;
    transition: right 0.2s ease;
  `}
`;

export const MenuOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
  position: fixed;
  top: 0;
  opacity: 0;
  visibility: hidden;
  right: 0px;
  transition: right 0.9s linear;
  z-index: 9;
  ${is("show")`
    opacity: 1;
		transition: transform 0.9s linear;
    visibility: visible;
  `}
`;

export const MenuContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Navbar = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li a {
      padding: 0 25px;
      line-height: 50px;
      text-align: center;
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 22px;
    }
  }
`;

export const SocialMedia = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    padding: 3rem 2rem;
    li a {
      display: block;
      width: 25px;
      height: 25px;
      color: #462a68;
      svg {
        font-size: 22px;
      }
      &:hover {
        color: #fff;
      }
    }
  }
`;
