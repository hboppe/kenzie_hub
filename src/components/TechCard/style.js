import styled from "styled-components";

const Li = styled.li`
    background-color: var(--grey-4);
    padding: 15px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: var(--grey-1);
        cursor: pointer;
    }

    &:hover > p.headline{
        color: var(--grey-0);
    }

    p.headline {
        color: var(--grey-1);
    }
`

export default Li;