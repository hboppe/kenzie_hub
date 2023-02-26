import { useContext, useEffect } from 'react';
import { TechContext } from '../../contexts/TechContext.jsx';
import StyledModal from './style.js';
import Input from '../Input/index.jsx';
import Select from '../Select/index.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import editTechSchema from '../../validations/EditTechSchema.js';
import { MdClose } from 'react-icons/md';
import StyledButton from '../Button/style.js';


const EditTechModal = ({tech}) => {

    const {closeModal, showEditModal, selectedOption, handleSelectChange, selectOptions, setSelectedOption, techTitle, setTechTitle, updateTechInfo, deleteTech} = useContext(TechContext);

    const {register, setValue, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(editTechSchema)
    })

    useEffect(() => {
        setValue('status', selectedOption);
        setValue('title', techTitle);

    }, [selectedOption, techTitle]);

    
    return (

        <StyledModal isOpen={showEditModal} onBackgroundClick={closeModal} beforeOpen={() => { setSelectedOption(tech.status); setTechTitle(tech.title)}} beforeClose={() => {setSelectedOption(''); setTechTitle('')}}>
                

            <div className='titleContainer'>
                <h3 className='title3'>Tecnologia Detalhes</h3>
                <button className='closeModalButton' onClick={closeModal}> 
                    <MdClose className='closeModalIcon'/>
                </button>
            </div>

            <form onSubmit={handleSubmit(updateTechInfo)}>
                <Input inputName='title' 
                    label='Nome do projeto'
                    type='text'
                    error={errors.title?.message}
                    value={techTitle}
                    {...register('title')}
                />

                <Select selectName='status'
                    label='Status'
                    options={selectOptions}
                    onChange={handleSelectChange}
                    {...register('status')}
                />
                {errors?.status && <small>{errors.status.message}</small>}
               
                <div className='buttonsContainer'>
                    <StyledButton primaryNegative type="submit">Salvar alterações</StyledButton>

                    <StyledButton onClick={deleteTech} type='button'>
                        Excluir
                    </StyledButton>
                </div>
                

            </form>
            
        </StyledModal>        
    )

}

export default EditTechModal;