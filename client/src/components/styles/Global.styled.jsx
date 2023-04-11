import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        /* background: ${({theme}) => theme.colors.grey}; */

    }
    h1 {
        font-family: 'Orbitron', sans-serif;
    }
    h2 {
        font-size: 1.2rem;
        padding: 0.2rem;
        color: ${({theme}) => theme.colors.white};
        font-weight: 300;
    }
    

`