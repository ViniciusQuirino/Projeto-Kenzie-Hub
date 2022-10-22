import ProtectedRoutes from './ProtectedRoutes/index';
import Dashboard from './pages/Dashboard/index.jsx';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup/index';
import Login from './pages/Login/index';
import { motion } from 'framer-motion';
import './color.css';
import './App.css';

const App = () => {
    return (
        <motion.div className="App"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Routes>
                <Route path='/' element={<Login><h1>Kenzie Hub</h1></Login>}></Route>

                <Route path="/cadastro" element={<Signup><h1>Kenzie Hub</h1></Signup>} />

                <Route path='/dashboard' element={<ProtectedRoutes />}>

                    <Route index element={<Dashboard />} />

                </Route>

                <Route path="*" element={<Login><h1>Kenzie Hub</h1></Login>} />

            </Routes >
            <ToastContainer limit={1} autoClose={1500} />
        </motion.div>
    )
}

export default App;