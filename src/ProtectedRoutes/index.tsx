import { useNavigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect } from 'react';

const ProtectedRoutes = () => {
    const { userData, setCurrentRoute } = useContext(UserContext)
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!userData) {
            const pathname = window.location.pathname
            console.log(pathname)
            setCurrentRoute(pathname)
            navigate("/");
        }
    }, [])

    return (
        <>
            {userData && <Outlet />}
        </>
    )
}

export default ProtectedRoutes;