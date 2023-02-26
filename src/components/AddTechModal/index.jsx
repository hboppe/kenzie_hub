import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { TechContext } from "../../contexts/TechContext";
import editAndAddTechSchema from "../../validations/EditAndAddTechSchema";
import Button from "../Button/style";
import Input from "../Input";
import Select from "../Select";
import StyledModal from "./style";

const AddTechModal = () => {

    const { showAddNewTechModal, closeAddNewTechModal, selectOptions, handleSelectChange, addNewTech } = useContext(TechContext);

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(editAndAddTechSchema)
    });

    return (
        <StyledModal isOpen={showAddNewTechModal} onBackgroundClick={closeAddNewTechModal} >
            <div className="titleContainer">
                <h3 className="title3">Cadastrar Tecnologia</h3>
                <button onClick={closeAddNewTechModal} className="closeModalButton"><MdClose className="closeModalIcon"/></button>
            </div>
            <form onSubmit={handleSubmit(addNewTech)}>
                <Input inputName='title'
                    label='Nome'
                    type='text'
                    placeholder='Nome da tecnologia'
                    error={errors.title?.message}
                    {...register('title')}
                />
                <Select selectName='status'
                    label='Selecionar status'
                    options={selectOptions}
                    onChange={handleSelectChange}
                    error={errors.status?.message}
                    {...register('status')}

                />
                <Button primary type="submit" >Cadastrar Tecnologia</Button>
            </form>
        </StyledModal>
    )
}

export default AddTechModal;