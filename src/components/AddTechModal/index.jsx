import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { TechContext } from "../../contexts/TechContext";
import Input from "../Input";
import Select from "../Select";
import StyledModal from "./style";

const AddTechModal = () => {

    const { addNewTech, closeAddNewTechModal } = useContext(TechContext);

    return (
        <StyledModal isOpen={addNewTech} onBackgroundClick={closeAddNewTechModal} >
            <div className="titleContainer">
                <h3 className="title3">Cadastrar Tecnologia</h3>
                <button onClick={closeAddNewTechModal} className="closeModalButton"><MdClose className="closeModalIcon"/></button>
            </div>
            <form>
                <Input inputName='title'
                    label='Nome'
                    type='text'
                    placeholder='Nome da tecnologia'
                />
                <Select/>
            </form>
        </StyledModal>
    )
}

export default AddTechModal;