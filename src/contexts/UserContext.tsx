import React, { createContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import api from '../services/api';

interface iProvidersProps {
    children: ReactNode;
}

interface iTechnology {
    id: string;
    title: string;
    status: string;
}

export interface iFormSignup {
    id?: string | number;
    name?: string;
    email?: string ;
    password?: string;
    confirmPassword?: string;
    bio?: string;
    contact?: string;
    course_module?: string;
}

export interface iUserData {
    name: string;
    course_module: string;
}

interface iUserContext {
    signInUser: (data: iFormLogin) => void;
    registerUser: (data: iFormSignup) => void;
    userData: iUserData;
    setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
    globalLoading: boolean;
    setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
    technologys: iTechnology[];
    setTechnologys: React.Dispatch<React.SetStateAction<iTechnology[]>>
    li: boolean;
    setLi: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iFormLogin {
    email: string;
    password: string;
}

export const UserContext = createContext({} as iUserContext)


const Providers = ({ children }: iProvidersProps) => {
    const [globalLoading, setGlobalLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState<iUserData>({} as iUserData)
    const [technologys, setTechnologys] = useState<iTechnology[]>([])
    const [currentRoute, setCurrentRoute] = useState<string | null>(null);
    const [li, setLi] = useState(false)
    const navigate = useNavigate()


    const token = localStorage.getItem("@KenzieHub:token")

    useEffect(() => {

        const autoLogin = async () => {

            if (token) {
                setGlobalLoading(true)
                try {
                    api.defaults.headers.common.authorization = `Bearer ${token}`

                    const response = await api.get('/profile')

                    setUserData({
                        name: response.data.name,
                        course_module: response.data.course_module
                    })

                    navigate(currentRoute!)
                    setTechnologys(response.data.techs)

                } catch (error) {

                    localStorage.removeItem("@KenzieHub:token")
                    navigate('/')

                } finally {
                    setGlobalLoading(false)
                }

            }
        }
        autoLogin()
    }, [])

    async function signInUser(data: iFormLogin): Promise<void> {
        setGlobalLoading(true)
        try {
            const response = await api.post("/sessions", data)
            navigate(`/dashboard`)

            localStorage.setItem("@KenzieHub:token", response.data.token)
            localStorage.setItem("@KenzieHub:userid", response.data.user.id)

            setTechnologys(response.data.user.techs)
            setUserData({
                name: response.data.user.name,
                course_module: response.data.user.course_module
            })

            toast.success('Logado com sucesso!', {
                theme: "dark"
            })

        } catch (error) {
            toast.error('Email ou senha invalido!', {
                theme: "dark"
            })
        } finally {
            setGlobalLoading(false)
        }
    }


    const registerUser = async (data: iFormSignup): Promise<void> => {

        try {
            await api.post('/users', data)
            navigate("/")
            toast.success('Usuário cadastrado com sucesso!', {
                theme: "dark"
            })
        } catch (error) {
            toast.error('Esse usuário já existe!'), {
                theme: "dark"
            }
        }
    }


    return (
        <UserContext.Provider value={{ signInUser, registerUser, userData, setCurrentRoute, globalLoading, setGlobalLoading, technologys, setTechnologys, li, setLi }}>
            {children}
        </UserContext.Provider>
    )
}

export default Providers;
