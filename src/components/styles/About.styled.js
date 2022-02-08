import styled from "styled-components";

export const StyledAbout = styled.section`
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
`;

export const StyledPersonal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .info-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    grid-gap: 1px;
    .personalinfo {
      grid-column-start: 1;
      grid-column-end: 3;
      h2 {
        margin: 1rem 0;
        font-size: 1.5rem;
        color: white;
        width: 100%;
      }
    }
    .info {
      width: 340px;
      margin: 5px 0;
      display: flex;
      font-size: 0.8rem;
      p {
        margin: 0 5px;
        color: white;
      }
      h3 {
        margin: 0 5px;
        color: white;
      }
    }
    button {
      margin: 25px 0;
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
        border: 1px solid #16d6a8;
      }
    }
  }
  .info-hours {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 1rem;
        .info-hour {
            border: 1px solid #021f18;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            h1 {
                font-size: 3rem;
                margin: 5px;
                color: #16d6a8;
            }
            p {
                font-size: 1rem;
                color: white;
            }
        }
    }
`;
