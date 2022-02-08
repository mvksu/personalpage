import styled from "styled-components";

export const StyledSkills = styled.section`
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100%;
  div {
    width: 100%;
  }
  h1 {
    margin: 4rem 0 5rem;
    text-align: center;
    font-size: 2rem;
    color: white;
  }
  span {
    font-size: 2rem;
    color: #16d6a8;
  }

  .stack {
    display: flex;
    justify-content: space-around;
  }

  .box-area {
    background-color: lightgrey;
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

  .round,
  .inner-box {
    position: absolute;
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

  .round {
    clip: rect(0px, 200px, 200px, 100px);
    background-color: #16d6a8;
  }

  .inner-box {
    /* clip: rect(0px, 100px, 100px, 0px); */
    background-color: #16d6a8;
  }

  .round.outer,
  .inner-box {
    animation: animate ease 1s;
    transform: rotate(155deg);
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: lightgrey;
    width: 180px;
    background-color: black;
    text-align: center;
    margin: 10px 0 0 10px;
    font-size: 4.5rem;
    position: absolute;
    z-index: 90;
    height: 180px;
    border-radius: 50%;
    h1 {
        margin: 0.5rem 0;
        font-weight: bold;
        font-size: 2rem;
    }
    .infotext {
        font-size: 1.5rem;
    }
    &:hover {
      svg {
        display: none;
      }
      .infotext, h1 {
        display: block;
      }
    }
    .infotext, h1 {
      display: none;
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(155deg);
    }
  }
`;
