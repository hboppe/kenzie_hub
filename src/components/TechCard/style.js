import styled from "styled-components";

const Li = styled.li`
    background-color: var(--grey-4);
    padding: 12px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: var(--grey-1);
    }

    &:hover > p.headline{
        color: var(--grey-0);
    }

    p.headline {
        color: var(--grey-1);
    }
`

export default Li;