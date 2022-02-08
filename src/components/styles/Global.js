import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;600&display=swap');
    body {
        background-color: ${({ theme }) => theme.colors.body};
        font-family: 'Spline Sans', sans-serif;
        text-transform: uppercase;
        list-style: none;
        min-height: 100vh;
        max-width: 100vw;
    }

    img {
        max-width: 100%
    }

    p {
        opacity: 0.76;
    }

    svg {
        max-width: 100%;
        max-height: 100%;/
    }
`;
