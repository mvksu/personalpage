import styled from "styled-components";

export const StyledHeader = styled.header`
  border: 1px solid red;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  color: white;
  margin: 0;
  padding: 0;
  height: 100px;

  li {
    text-decoration: none;
    margin: 0 1.2rem;
    &:hover {
      color: ${({ theme }) => theme.colors.main};
      cursor: pointer;
    }
  }

  nav {
    display: flex;
    align-items: center;
    svg {
      margin: 0 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
      &:hover {
          transform: scale(1.2)
      } 
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
