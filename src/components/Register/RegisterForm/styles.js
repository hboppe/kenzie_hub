import styled from "styled-components";
import { defaultInputForm } from "../../../GlobalStyles/styles";

const Form = styled.form`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        display: flex;
        flex-direction: column;
        gap:.5rem
    
    }
    div > label {
        font-size: var(--headline);
    }

    div > input, select {
        padding: 10px 13px;
        border-radius: 4px;
        background-color: #343B41;
        border: none;
        color: var(--grey-0);
    }


    div > input:focus, sele{
        outline: 1px solid var(--grey-0);
    }

    button {
        background-color: var(--color-primary);
        width: 100%;
        padding: 0.6875rem;
        border: 0px;
        border-radius: 4px;
        color: var(--grey-0);
        transition: .5s ease-in-out;
    }

    button:hover{
        cursor: pointer;
        background-color: var(--color-primary-focus);
    }

    small{
        color: var(--grey-1);
    }

    ${defaultInputForm}
`

export default Form;