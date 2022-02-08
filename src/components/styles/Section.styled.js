import styled from "styled-components";

export const StyledSection = styled.section`
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  height: 70vh;
`;

export const Background = styled.div`
 svg {
    z-index: -1;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: -100px;
  }`

export const Left = styled.div`
  width: 60%;
  text-align: right; 
  padding: 5rem;
  h1 {
    font-size: 4rem;
    color: #16D6A8;
    font-weight: bold;
  }
  h2 {
    margin-top: 0.5rem 0;
    font-size: 3rem;
    color: white;
  }
  p {
    margin: 1.5rem 0;
    color: white;
  }
  button {
    font-size: 0.8rem;
    text-transform: uppercase;
    background: none;
    border: 1px solid #119e7d;
    cursor: pointer;
    outline: inherit;
    color: white;
    padding: 0.8rem 3.2rem;
    border-radius: 25px;
    &:hover {
      border: 1px solid #16D6A8 ;
    }

  }

`

export const Right = styled.div`
  padding: 2rem;
  width: 30%;
  height: 60%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 160px;
    border-radius: 50%;
    margin-bottom: 10px;
    &:hover {
      transform: scale(1.05)
    }
  }
  h1, h2, p {
    margin: 2px 0;
  }
  h1 {
    color: black;
    font-weight: bold;
  }
  div {
    margin-top: 0.5rem;
  }
  svg {
    position: flex;
    z-index: 100;
    color: gold;
  }
`
