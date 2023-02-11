import styled from "styled-components";

const StyledHeader = styled.header`
    margin: 5.0625rem 0 1.25rem;
    
    display: flex;
    justify-content: center;
    
    &.withButton{
        background-color: red;
    }

    a {
        background-color: var(--grey-3);
        color: var(--grey-0);
    }

`

export default StyledHeader;