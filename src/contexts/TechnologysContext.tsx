import { createContext, ReactNode, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { toast } from 'react-toastify';
import api from "../services/api";

interface iTechnologysProviderProps {
    children: ReactNode
}

interface iTechnologysContext {
    addTechnology: (data: iDataTech) => void;
    openCloseModal: boolean;
    setOpenCloseModal: React.Dispatch<React.SetStateAction<boolean>>
    fetchData: () => void;
    dataLi: iDataTech;
    setDataLi: React.Dispatch<React.SetStateAction<iDataTech>>
    removeTech: (data: iDataTech) => void;
    editTech: (data: iDataTech, id: iDataTech) => void;
}

export interface iDataTech {
    id?: string | number;
    title?: string;
    status?: string;
    name?: string;
    email?: string;
    password?: string;
}

export const TechnologysContext = createContext({} as iTechnologysContext)

export const TechnologysProvider = ({ children }: iTechnologysProviderProps) => {

    const { technologys, setTechnologys, setGlobalLoading, li, setLi } = useContext(UserContext)
    const [openCloseModal, setOpenCloseModal] = useState(false)
    const [dataLi, setDataLi] = useState<iDataTech>({} as iDataTech)

    const token = localStorage.getItem("@KenzieHub:token")
    const id = localStorage.getItem('@KenzieHub:userid')

    async function addTechnology(data: iDataTech): Promise<void> {
        setGlobalLoading(true)
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            const response = await api.post("/users/techs", data)

            toast.success('Tecnologia adicionada!', {
                theme: "dark"
            })

            setTechnologys([...technologys, response.data])
            setOpenCloseModal(!openCloseModal)

        } catch (error) {
            console.error(error)
        } finally {
            setGlobalLoading(false)
        }
    }

    async function fetchData(): Promise<void> {
        setGlobalLoading(true)
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            const response = await api.get(`/users/${id}`)

            setTechnologys(response.data.techs)

        } catch (error) {
            console.error(error)
        } finally {
            setGlobalLoading(false)
        }
    }

    async function removeTech(id: iDataTech): Promise<void> {
        setGlobalLoading(true)
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            await api.delete(`/users/techs/${id}`)

            toast.success('Tecnologia removida!', {
                theme: "dark"
            })
            const filter = technologys.filter(elem => elem.id !== id)

            setTechnologys(filter)
            setLi(!li)

        } catch (error) {
            console.log(error)
        } finally {
            setGlobalLoading(false)
        }
    }

    async function editTech(data: iDataTech, id: iDataTech): Promise<void> {
        setGlobalLoading(true)
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            const response = await api.put(`/users/techs/${id}`, data)

            toast.success('Tecnologia editada!', {
                theme: "dark"
            })

            const result = technologys.filter(elem => elem.id !== id)
            setTechnologys([response.data, ...result])
            setLi(!li)

        } catch (error) {
            console.error(error)
        } finally {
            setGlobalLoading(false)
        }
    }


    return (
        <TechnologysContext.Provider value={{ addTechnology, openCloseModal, setOpenCloseModal, fetchData, dataLi, setDataLi, removeTech, editTech }}>
            {children}
        </TechnologysContext.Provider>
    )
}


export default TechnologysProvider;