import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.primaryNegative ? 'var(--color-primary-Negative)' : 'var(--grey-1)'};
    color: var(--grey-0);

    border: none;
    padding: 10px 30px;
    font-size: 13px;
    border-radius: 4px;
    cursor: pointer;
    transition: .5s ease-in-out;

    &:hover {
        background-color: ${props => props.primaryNegative ? 'var(--color-primary)' : 'var(--grey-2)'};
    }
`
export default StyledButton;