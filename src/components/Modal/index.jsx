import { useContext, useEffect } from 'react';
import { TechContext } from '../../contexts/TechContext.jsx';
import StyledModal from './style.js';
import ModalForm from './ModalForm/index'
import Input from '../Input/index.jsx';
import Select from '../Select/index.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import editTechSchema from '../../validations/EditTechSchema.js';

const Modal = ({tech}) => {

    const {closeModal, showModal, selectedOption, handleSelectChange, selectOptions, setSelectedOption} = useContext(TechContext);

    // useEffect(() => {
    //     setSelectedOption(tech.status)
    // }, [])

    // const {register} = useForm({
    //     resolver: yupResolver(editTechSchema)
    // })

    return (

        <StyledModal isOpen={showModal} onBackgroundClick={closeModal} beforeOpen={() => setSelectedOption(tech.status)} beforeClose={() => setSelectedOption('')}>
                <div>
                    <h3>Tecnologia Detalhes</h3>
                </div>
            <ModalForm>
                <Input inputName='title' 
                    label='Nome do projeto'
                    type='text'
                    defaultValue={tech.title}
                    // {...register('title')}
                />

                <Select selectName='status'
                    label='Status'
                    options={selectOptions}
                    onChange={handleSelectChange}
                    defaultValue={selectedOption}
                    // {...register('status')}
                />

                <div className='buttonsContainer'>
                    <button type='submit'>Salvar alteraçoes</button>
                </div>

            </ModalForm>
            
        </StyledModal>        
    )

}

export default Modal;