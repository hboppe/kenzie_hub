import styled from "styled-components";

const StyledForm = styled.form`
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

    div > input {
        padding: 10px 13px;
        border-radius: 4px;
        background-color: #343B41;
        border: none;
        color: var(--grey-0);
    }



    div > input:focus{
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

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px #343B41 inset !important;
        -webkit-text-fill-color: var(--grey-0) !important;
        -webkit
    }

    small {
        color: var(--grey-1);
    }
`

export default StyledForm;