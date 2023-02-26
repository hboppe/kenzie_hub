import styled from "styled-components";

const Section = styled.section`
    color: var(--grey-0);  
    padding: 0px 0.75rem;
    
    div.sectionContainer {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 780px;
        margin: 0 auto;
    }
    
    div.techContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div.techContainer > button {
        background-color: var(--grey-3);
        border: none;
        color: var(--grey-0);
        padding: 8px 13px;
        border-radius: 4px;
        transition: .5s ease-in-out;
        font-size: 1.25rem;
    }

    div.techContainer > button:hover {
        cursor: pointer;
        background-color: var(--grey-1);
    }

    ul {
        background-color: var(--grey-2);
        border-radius: 4px;
        padding: 1.375rem 0.5625rem;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    @media (min-width: 600px){
        div.sectionContainer {
            max-width: ;
        }
    }
`

export default Section;