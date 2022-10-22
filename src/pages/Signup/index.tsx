import { iFormSignup, UserContext } from '../../contexts/UserContext';
import { useState, useContext, ReactNode } from 'react';
import { schemaSignup } from '../../validations/index';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { TiArrowSortedDown } from 'react-icons/ti';
import { BsEyeFill } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import General from './styled';

interface iSignupProps {
    children: ReactNode;
}

const Signup = ({ children }: iSignupProps) => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<iFormSignup>({
        resolver: yupResolver(schemaSignup)
    })

    const [passwordOne, setPasswordOne] = useState(false)
    const [passwordTwo, setpasswordTwo] = useState(false)

    const { registerUser } = useContext(UserContext)

    return (
        <General>
            <div className='header'>
                {children}
                <Link to="/" className="header-link">Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(registerUser)}>
                <div className='top'>
                    <h3>Crie sua conta</h3>
                    <span>Rapido e grátis, vamos nessa!</span>
                </div>
                <div>
                    <label htmlFor="signup-name">Nome</label>
                    <input {...register('name')} type="text" id="signup-name" placeholder='Digite seu nome' />
                    <p>{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="signup-email">E-mail</label>
                    <input {...register('email')} type="text" id="signup-email" placeholder='Digite seu email' />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="signup-password">Senha</label>
                    <input {...register('password')} type={passwordOne ? "text" : "password"} id="signup-password" placeholder='Digite sua senha' />
                    <BsEyeFill onClick={() => setPasswordOne(!passwordOne)} />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <label htmlFor="signup-confirm-password">Confirmar senha</label>
                    <input {...register('confirmPassword')} type={passwordTwo ? "text" : "password"} id="signup-confirm-password" placeholder='Confirme sua senha' />
                    <BsEyeFill onClick={() => setpasswordTwo(!passwordTwo)} />
                    <p>{errors.confirmPassword?.message}</p>
                </div>
                <div>
                    <label htmlFor="signup-bio">Biografia</label>
                    <input {...register('bio')} type="text" id='signup-bio' placeholder='Fale sobre você' />
                    <p>{errors.bio?.message}</p>
                </div>
                <div>
                    <label htmlFor="signup-contact">Contato (Linkedin)</label>
                    <input {...register('contact')} type="text" id='signup-contact' placeholder='Digite o link do seu perfil no Linkedin' />
                    <p>{errors.contact?.message}</p>
                </div>

                <div>
                    <label htmlFor="select">Selecione o Módulo</label>
                    <select {...register('course_module')} id="select">
                        <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                        <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo</option>
                        <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro Módulo</option>
                        <option value="Quarto Módulo (Backend Avançado)">Quarto Módulo</option>
                    </select>
                    <TiArrowSortedDown />
                </div>
                <button type='submit'>Cadastrar</button>
            </form>
        </General>
    )
}

export default Signup