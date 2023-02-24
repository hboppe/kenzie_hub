import { useContext } from 'react';
import { TechContext } from '../../contexts/TechContext.jsx';
import StyledModal from './style.js';

const Modal = ({tech}) => {
    const {closeModal, showModal} = useContext(TechContext);

    return (
        <StyledModal isOpen={showModal} onBackgroundClick={closeModal}>
            <h1>{tech.title}</h1>
            <h1>{tech.status}</h1>
            
        </StyledModal>        
    )

}

export default Modal;