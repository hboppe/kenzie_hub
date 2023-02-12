import styled from "styled-components";

const RegisterSection = styled.section`
    
    display: flex;
    justify-content: center;
    margin: 0 12px;


    div.sectionContainer {
        color: var(--grey-0);
        background-color: var(--grey-3);
        display: flex;
        flex-direction: column;
        /* width: fit-content; */
        padding: 2.1875rem 1.0625rem 1.25rem;
        align-items: center;
        gap: 18px;
        border-radius: 4px;
        max-width: 370px;
    }

    div.sectionContainer > small {
        color: var(--grey-1);
    }
    /* div {
        
    } */
`

export default RegisterSection;