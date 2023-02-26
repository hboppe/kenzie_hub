import styled from "styled-components";

const Div = styled.div`
    color: var(--grey-0);

    display: flex;
    flex-direction: column;
    gap:.5rem;

    select{
        padding: 10px 13px;
        border-radius: 4px;
        background-color: #343B41;
        border: none;
        color: var(--grey-0);
    }

    select:focus{
        outline: 1px solid var(--grey-0);
    }

    small{
        color: var(--grey-1);
    }

`

export default Div;