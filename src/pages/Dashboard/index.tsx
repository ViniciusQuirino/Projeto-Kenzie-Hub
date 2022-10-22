import ModalEditRemoveTechnology from '../../components/ModalEditRemoveTechnology';
import { TechnologysContext } from '../../contexts/TechnologysContext';
import { UserContext } from '../../contexts/UserContext';
import Modal from '../../components/ModalAddTechnology';
import addTechnologies from '../../../public/plus.png'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './style.css';

function Dashboard() {

  const navigate = useNavigate()
  const { userData, technologys, li, setLi } = useContext(UserContext)
  const { openCloseModal, setOpenCloseModal, setDataLi } = useContext(TechnologysContext)

  return (
    <div>
      < header >
        <h1>Kenzie Hub</h1>
        <button className="logout" onClick={() => {
          localStorage.removeItem('@KenzieHub:token')
          localStorage.removeItem('@KenzieHub:userid')
          navigate('/')
        }
        }>Sair</button>
      </header >
      <div className="center">
        <h2>Olá, {userData?.name}</h2>
        <p>{userData?.course_module}</p>
      </div>
      <section>
        <h3>Tecnologias</h3>
        <img onClick={() => {
          setOpenCloseModal(!openCloseModal)
        }} src={addTechnologies} alt="addTechnologies" />
      </section>
      <main>
        <ul>
          {technologys.length === 0 ?
            <p>Não possui nenhuma tecnologia</p>
            :

            technologys.map(elem => (
              <li onClick={(e) => {
                setDataLi({
                  id: elem.id,
                  name: elem.title,
                  status: elem.status
                })
                setLi(!li)
              }} key={elem.id}>
                <h3 >{elem.title}</h3>
                <p >{elem.status}</p>
              </li>
            ))

          }


          {li && <ModalEditRemoveTechnology />}

          {openCloseModal && <Modal />}

        </ul>
      </main>
    </div >

  )
}


export default Dashboard;
