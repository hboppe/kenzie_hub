import Modal from "styled-react-modal";

const StyledModal = Modal.styled`
    color: white;
    background-color: var(--grey-3);
    width: 100vw;
    margin: 0rem .75rem;
    border-radius: 4px;

    form > div {
        display: flex;
        flex-direction: column;
        
    }

    .titleContainer {
        background-color: var(--grey-2);
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 4px 4px 0px 0px;

    }

    .closeModalButton {
        
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .closeModalIcon {
        color: var(--grey-1);
        font-size: 25px;
    }

   
`

export default StyledModal;