import React, {useEffect} from 'react'
import style from '../TablaProjects/TablaProjects.module.css'
import instagram from '../../imagenes/instagram.png'
import NavAdmin from '../NavAdmin/NavAdmin'
import { useDispatch, useSelector} from 'react-redux'
import { getAllProjects, deleteProjects } from '../../redux/actions'

const TablaProjects = () => {

    const dispatch = useDispatch()
    const allProjects = useSelector(c => c.allProjects)
    console.log(allProjects)

    useEffect(() => {
        dispatch(getAllProjects())
    }, [])

    const eliminar = (_id) => {
        dispatch(deleteProjects(_id))
        setTimeout(() => {dispatch(getAllProjects())}, 300) 
    }

  return (
    <div className={style.contFlex}>
        <NavAdmin/>
        <div className={style.contCards}>
            {allProjects.length !== 0 ? allProjects.projects.map(c =>
                <div key={c._id} className={style.cards}>
                <div className={style.textCont}>
                  <div className={style.header}>
                    <div>
                      <h1 style={{color: `${c.color}`}}>{c.name}</h1>
                    </div>
                    <div>
                      <img src={instagram} alt="" />
                    </div>
                  </div>
                  <p>{c.description}</p>
                    <div className={style.participantes}>
                      <h2>Nicolás Vásquez</h2>
                      <p>Director de Arte</p>
                      <h2>Alberto Martínez</h2>
                      <p>Redactor</p>
                      <h2>Daniel Vinueza</h2>
                      <p>Director Creativo</p>
                    </div>
                  <button>Ver más</button>
                </div>
                <div className={style.contImg}>
                    <img src={c.images.portada} alt=''/> 
                    <span onClick={() => {eliminar(c._id)}} className="material-icons-outlined">
                        clear
                    </span>
                </div>
              </div>
            )
            :
            <h1>No</h1>
            }
        </div>
    </div>
  )
}

export default TablaProjects