import { StyledAbout, StyledPersonal } from "./styles/About.styled";
import { Container } from "./styles/Container.styled";

export default function About() {
  return (
    <StyledAbout>
      <Container>
        <div>
          <h1>
            About <span>Me</span>
          </h1>
        </div>
        <StyledPersonal>
          <div className="info-block">
            <div className="personalinfo">
              <h2>Personal infos</h2>
            </div>
            <div className="info">
              <p>First name</p>
              <h3>Maksymilian</h3>
            </div>
            <div className="info">
              <p>Last name</p>
              <h3>Andrzejczak</h3>
            </div>
            <div className="info">
              <p>Age</p>
              <h3>20 years old</h3>
            </div>
            <div className="info">
              <p>Nationality</p>
              <h3>Poland</h3>
            </div>
            <div className="info">
              <p>School</p>
              <h3>University of Gdansk</h3>
            </div>
            <div className="info">
              <p>Phone Number</p>
              <h3>+48 533 643 011</h3>
            </div>
            <div className="info">
              <p>Language</p>
              <h3>Polish | English</h3>
            </div>
            <div className="info">
              <p>Email</p>
              <h3>andrzejczakmaks@icloud.com</h3>
            </div>
            <div className="info">
              <p>Address</p>
              <h3>Gdansk, Poland</h3>
            </div>
            <div className="info">
              <p>Github</p>
              <h3>@mvksu</h3>
            </div>
            <div>
              <button>Download CV</button>
            </div>
          </div>
          <div className="info-hours">
            <div className="info-hour">
              <h1>100+</h1>
              <p>hours</p>
            </div>
            <div className="info-hour">
              <h1>100+</h1>
              <p>hours</p>
            </div>
            <div className="info-hour">
              <h1>100+</h1>
              <p>hours</p>
            </div>
            <div className="info-hour">
              <h1>100+</h1>
              <p>hours</p>
            </div>
          </div>
        </StyledPersonal>
      </Container>
    </StyledAbout>
  );
}
