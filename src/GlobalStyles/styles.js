import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        list-style: none;
    }

    :root {

        //Primary Palette

        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-Negative: #59323F;

        // Grey Scale Palette

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        //Feedback Palette

        --sucess: #3FE864;
        --negative: #E83F5B;
    }

    body { 
        font-family: 'Inter', sans-serif;
        background-color: var(--grey-4);
    }

    .title1 {
        font-size: 1.125rem;
        font-weight: bold;
        color: var(--grey-0);
    }

    .title2 {
        font-size: 1rem;
        font-weight: bold;
    }

    .title3 {
        font-size: 14px;
        font-weight: bold;
    }

    .headline {
        font-size: 0.75rem;
        
    }

    .headlineBold {
        font-size: 0.75rem;
        font-weight: bold;
    }

    .headlineItalic {
        font-size: 0.75rem;
        font-style: italic;
    }
    
`

const defaultInputForm = css`
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px #343B41 inset !important;
        -webkit-text-fill-color: var(--grey-0) !important;
        
    }
`

export  {GlobalStyle, defaultInputForm};