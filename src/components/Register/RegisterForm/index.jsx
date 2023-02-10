import { useForm } from "react-hook-form";
import Form from "./styles"

const RegisterForm = () => {

    const {register} = useForm();

    return (
        <Form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Digite seu nome aqui" {...register('name')}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Digite seu email aqui" {...register('email')}/>
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="text" placeholder="Digite sua senha aqui" {...register('password')}/>
            </div>
            <div>
                <label htmlFor="passwordConfig">Confirmar senha</label>
                <input type="text" placeholder="Confirme sua senha" {...register('passwordConfig')}/>
            </div>

            <div>
                <label htmlFor="bio">Bio</label>
                <input type="text" placeholder="False sobre você" {...register('bio')}/>
            </div>
            <div>
                <label htmlFor="phone">Ccontato</label>
                <input type="text" placeholder="Opçao de contato" {...register('phone')}/>

            </div>
            <div>
                <label htmlFor="module">Selecionar modulo</label>
                <select id="module" {...register('module')}>
                    
                </select>
            </div>
            <button type="submit">Cadastrar</button>
        </Form>
    )

}

export default RegisterForm;