import { iDataTech, TechnologysContext } from '../../contexts/TechnologysContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { TiArrowSortedDown } from 'react-icons/ti';
import { schemaModal } from '../../validations';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import ModalBlack from './styled';

const Modal = () => {

    const { openCloseModal, setOpenCloseModal, addTechnology } = useContext(TechnologysContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iDataTech>({
        resolver: yupResolver(schemaModal)
    })

    return (
        <ModalBlack>
            <div className='ContainerModal'>
                <header>
                    <h3>Cadastrar tecnologia</h3>
                    <button onClick={() => {
                        setOpenCloseModal(!openCloseModal)
                    }} className="closeModal">X</button>
                </header>
                <form onSubmit={handleSubmit((data) => {
                    addTechnology(data)
                    setOpenCloseModal(!openCloseModal)
                })}>
                    <div>
                        <label htmlFor="nomeTech">Nome</label>
                        <input {...register('title')} type="text" id="nomeTech" placeholder='Digite o noem da tecnologia' />
                        <p>{errors.title?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="status">Selecionar status</label>
                        <select {...register('status')} id="status">
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <TiArrowSortedDown />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </ModalBlack>
    )
}

export default Modal