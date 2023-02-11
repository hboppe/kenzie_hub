import styled from "styled-components";

const Main = styled.main`
    margin: 0 0.75rem;

    section {
        background-color: var(--grey-3);
        color: var(--grey-0);
        margin: 0 12px;
        padding: 33px 18px;
        display: flex;
        flex-direction: column;
        gap: 17px;
        align-items: center;
        border-radius: 4px;
        max-width: 369px;
        margin: auto;
    }

    section > p.paragAccount {
        color: var(--grey-1);
        

    }

    section > a {
        text-decoration: none;
        background-color: var(--grey-1);
        width: 100%;
        padding: 0.6875rem;
        text-align: center;
        color: var(--grey-0);
        border-radius: 4px;
        transition: .5s ease-in-out;
    }

    section > a:hover {
        background-color: var(--grey-2);
    }
`



export default Main;