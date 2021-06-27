import styled from "styled-components";

export const SkillStyle = styled.div`
  margin-bottom: 5rem;
  background-color: #252330;
  position: relative;
  .internal-container {
    padding: 5rem 0;
  }
  div > div {
    z-index: 1;
    position: relative;
  }
  .header {
    margin-bottom: 2rem;
  }
  h2 {
    color: #842cee;
  }
  p {
    color: #9692ad;
  }
  .slick-track {
    li {
      text-align: left;
      height: 200px;
      display: flex;
      align-items: center;
      padding: 1rem;
      position: relative;
      h3 {
        display: flex;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        &:before {
          content: "";
          width: 3px;
          height: 20px;
          background-color: #6e25c8;
          margin-right: 5px;
          position: absolute;
          top: 80px;
          left: 8px;
        }
      }
    }
  }
  .skewed.top {
    display: block;
    background-color: #fff;
    top: -50%;
    left: 0;
    height: 100px;
    width: 100%;
    transform: matrix(1, -0.105104, 0, 1, 0, -0.35);
    overflow: hidden;
    z-index: 0;
  }
  .skewed.bottom {
    content: "";
    display: block;
    background-color: #fff;
    top: auto;
    bottom: -50%;
    left: 0;
    height: 100px;
    width: 100%;
    transform: matrix(1, -0.105104, 0, 1, 0, -0.35);
    overflow: hidden;
    z-index: 0;
  }
  .skill-container-full {
    content: "";
    position: absolute;
    width: 100%;
    background-color: #ffffff;
    height: 100%;
    left: 0;
    top: 0;
    transform: matrix(1, -0.105104, 0, 1, 0, -0.35);
  }

  .skewed.detail.top {
    top: -1px;
    left: 0;
    height: 22px;
    background-color: #842cee;
    width: 200px;
    position: absolute;
    z-index: 1;
    transform: matrix(1, 0, 0, 1, 0, -0.35);
  }

  .skewed.detail.bottom {
    height: 22px;
    background-color: #24d6e5;
    top: auto;
    bottom: -1px;
    width: 200px;
    right: 0;
    left: auto;
    position: absolute;
    z-index: 1;
    transform: matrix(1, 0, 0, 1, 0, -0.35);
  }
`;

export const Item = styled.div`
  color: ${(props) => props.theme.colors["light"]};
`;

export const Icon = styled.div`
  background-color: #894eff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  svg {
    height: 30px;
  }
`;
