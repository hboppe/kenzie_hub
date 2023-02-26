import styled from "styled-components";
import { defaultInputForm } from "../../GlobalStyles/styles";

const Div = styled.div`

    display: flex;
    flex-direction: column;
    gap: .5rem;   
    position: relative;

    input {
        padding: 10px 13px;
        border-radius: 4px;
        background-color: #343B41;
        border: none;
        color: var(--grey-0);
    }

    input:focus{
        outline: 1px solid var(--grey-0);
    }

    ${defaultInputForm}

    small{
        color: var(--grey-1);
    }

    .showHidePassword {
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

`

export default Div;