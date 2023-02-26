import * as yup from 'yup';

const editAndAddTechSchema = yup.object({
    title: yup.string().required('Nome do projeto é obrigatório').matches(/.{3,30}/, 'Mínimo de 3 caracteres e no maximo 30'),
    status: yup.string().required('Status é obrigatório')
})

export default editAndAddTechSchema;