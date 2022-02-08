import { Container } from "./styles/Container.styled";
import { StyledSkills } from "./styles/Skills.styled";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";


export default function Skills() {
  return (
    <StyledSkills>
      <Container>
        <div>
          <h1>
            My <span>Skills</span>
          </h1>
        </div>
        <div className="stack">
          <div className="box-area">
            <div className="box">
              <div className="round outer">
                <div className="inner-box"></div>
              </div>
              <div className="round">
                <div className="inner-box"></div>
              </div>
              <div className="number">
                <FaHtml5 />
                <p className="infotext">HTML5</p>
                <h1>80%</h1>
              </div>
            </div>
          </div>
          <div className="box-area">
            <div className="box">
              <div className="round outer">
                <div className="inner-box"></div>
              </div>
              <div className="round">
                <div className="inner-box"></div>
              </div>
              <div className="number">
                <FaCss3 />
                <p className="infotext">CSS</p>
                <h1>80%</h1>
              </div>
            </div>
          </div>
          <div className="box-area">
            <div className="box">
              <div className="round outer">
                <div className="inner-box"></div>
              </div>
              <div className="round">
                <div className="inner-box"></div>
              </div>
              <div className="number">
                <FaJs />
                <p className="infotext">JavaScript</p>
                <h1>80%</h1>
              </div>
            </div>
          </div>
          <div className="box-area">
            <div className="box">
              <div className="round outer">
                <div className="inner-box"></div>
              </div>
              <div className="round">
                <div className="inner-box"></div>
              </div>
              <div className="number">
                <SiTypescript />
                <p className="infotext">TypeScript</p>
                <h1>80%</h1>
              </div>
            </div>
          </div>
          <div className="box-area">
            <div className="box">
              <div className="round outer">
                <div className="inner-box"></div>
              </div>
              <div className="round">
                <div className="inner-box"></div>
              </div>
              <div className="number">
                <FaReact />
                <p className="infotext">React.js</p>
                <h1>80%</h1>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </StyledSkills>
  );
}
