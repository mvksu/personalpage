import { Nav, StyledHeader } from "./styles/Header.styled";
import Logo from "./Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "./styles/Container.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo />
          <nav>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <FaGithub />
            <FaLinkedin />
          </nav>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
