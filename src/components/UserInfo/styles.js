import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    padding: 2.1875rem 0.625rem;
    border-top: 2px solid var(--grey-3);
    border-bottom: 2px solid var(--grey-3);
    margin-bottom: 1.1875rem;

    p{
        color: var(--grey-1);
    }

    @media (min-width: 600px){
        
    }
`

export default Section;
