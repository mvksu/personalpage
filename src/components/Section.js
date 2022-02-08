import {
  StyledSection,
  Left,
  Right,
  Background,
} from "./styles/Section.styled";
import { BsStarFill } from "react-icons/bs";
import { Container } from "./styles/Container.styled";

export default function Section({ children }) {
  return (
    <Container>
      <StyledSection>
        <Background>
          <svg
            width="588"
            height="1018"
            viewBox="0 0 588 1018"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1017.5H588V-2.5H477L0 1017.5Z" fill="#16D6A8" />
          </svg>
        </Background>
        <Left>
          <h1>Hi! i'm Max</h1>
          <h2>Frontend Enginner</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque
            iure officia quisquam numquam alias suscipit cum enim, porro
            incidunt?
          </p>
          <button>More about me</button>
        </Left>
        <Right>
          <img
            src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg"
            alt=""
          />
          <h1>@mvksu</h1>
          <h2>web developer</h2>
          <div>
            {[1, 2, 3, 4, 5].map((x) => (
              <BsStarFill />
            ))}
          </div>
        </Right>
      </StyledSection>
    </Container>
  );
}
