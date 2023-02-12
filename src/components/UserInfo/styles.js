import styled from "styled-components";

const Section = styled.section`
    
    gap: 0.625rem;
    padding: 2.1875rem 0.625rem;
    border-top: 2px solid var(--grey-3);
    border-bottom: 2px solid var(--grey-3);
    margin-bottom: 1.1875rem;

    p{
        color: var(--grey-1);
    }
    div {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 600px){
        /* flex-direction: row;
        justify-content: space-between; */
        /* max-width: 780px; */

        div {
            max-width: 780px;
            margin: 0 auto;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

export default Section;
