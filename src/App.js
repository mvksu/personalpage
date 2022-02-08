import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global";
import Header from "./components/Header";
import Section from "./components/Section";
import About from "./components/About";
import Skills from "./components/Skills";

const theme = {
  colors: {
    header: "#000",
    body: "#000",
    footer: "#003333",
    main: "#16D6A8",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Header />
        <Section />
        <About />
        <Skills />
    </ThemeProvider>
  );
}

export default App;
