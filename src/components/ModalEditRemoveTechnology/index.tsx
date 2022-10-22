import { TechnologysContext } from '../../contexts/TechnologysContext';
import { UserContext } from '../../contexts/UserContext';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import EditRemove from './styled';
import React from 'react'


const ModalEditRemoveTechnology = () => {
    const { dataLi, removeTech, editTech } = useContext(TechnologysContext)
    const { li, setLi } = useContext(UserContext)

    const { register, handleSubmit } = useForm()

    return (

        <EditRemove>
            <div className='ContainerEditRemove'>
                <header>
                    <h3>Cadastrar tecnologia</h3>
                    <button onClick={() => {
                        setLi(!li)
                    }} className="closeModal">X</button>
                </header>
                <form onSubmit={handleSubmit((data) => {
                    editTech(data, dataLi.id)
                    setLi(!li)
                })}>
                    <div>
                        <label htmlFor="nomeTech">Nome</label>
                        <input disabled {...register('title')} type="text" id="nomeTech" placeholder={dataLi.name} />
                    </div>
                    <div>
                        <label htmlFor="status">Selecionar status</label>
                        <select autoFocus {...register('status')} id="status">
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <TiArrowSortedDown />
                    </div>
                    <div className="divButton">
                        <button type="submit">Salvar</button>
                        <button onClick={() => {
                            removeTech(dataLi.id)
                            setLi(!li)
                        }} >Excluir</button>
                    </div>
                </form>
            </div >
        </EditRemove >
    )
}

export default ModalEditRemoveTechnology;