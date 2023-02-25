import Modal from "styled-react-modal";

const StyledModal = Modal.styled`
    color: white;
    background-color: var(--grey-3);
    width: 100vw;
    margin: 0rem .75rem;
    border-radius: 4px;
    min-width: 295px;
    max-width: 370px;

    form{
        padding: 15px;
        display:flex;
        flex-direction: column;
        gap: 18px;
    }

    form > div {
        display: flex;
        flex-direction: column;
        // padding: 15px;
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

    .closeModalButton:hover > .closeModalIcon{
        color: var(--grey-0);
        transition: .5s ease-in-out;
    }

    .closeModalIcon {
        color: var(--grey-1);
        font-size: 25px;
    }

    .buttonsContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 1.0625rem;
    }

   
`

export default StyledModal;