import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 5.0625rem 0.625rem 1.25rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    max-width: 780px;
    
    &.withButton{
        padding: 1.25rem 0.625rem 2rem;
        justify-content: space-between;
        /* margin-left: 10px;
        margin-right: 10px; */
    }

    a {
        background-color: var(--grey-3);
        padding: 10px 15px;
        color: var(--grey-0);
        text-decoration: none;
        border-radius: 4px;
        transition: .5s ease-in-out;
    }

    a:hover {
        background-color: var(--grey-1);
    }

    @media (min-width: 600px){
        &.withButton{
            padding: 1.875rem 0.625rem;

        }
    }

`

export default StyledHeader;