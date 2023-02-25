import styled from "styled-components";

const Form = styled.form`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

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

`

export default Form;