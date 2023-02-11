import styled from "styled-components";

const StyledSection = styled.section`
    background-color: var(--grey-3);
    color: var(--grey-0);
    margin: 0 12px;
    padding: 33px 18px;
    display: flex;
    flex-direction: column;
    gap: 17px;
    align-items: center;
    border-radius: 4px;

    .paragAccount {
        color: var(--grey-1);
        

    }

    a {
        text-decoration: none;
        background-color: var(--grey-1);
        width: 100%;
        padding: 0.6875rem;
        text-align: center;
        color: var(--grey-0);
        border-radius: 4px;
        transition: .5s ease-in-out;
    }

    a:hover {
        background-color: var(--grey-2);
    }

`

export default StyledSection;