import React, {useEffect, useState} from 'react'
import style from '../ContenidoWork/ContenidoWork.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {filtro} from '../../redux/actions'
import instagram from '../../imagenes/instagram.png'
import { getProjectsByType } from '../../redux/actions'

const ContenidoWork = () => {

  const [state, setState] = useState('')

  const dispatch = useDispatch();

  const filtrar = (tipo, prueba) => {
    dispatch(getProjectsByType(tipo))
    setState(prueba)
  }

  const tipo = useSelector(c => c.tipo)

  const filtros = useSelector(state => state.filtro)

/*   useEffect(() => {
    dispatch(getProjectsByType(tipo.description))
  }, []) */

  return (
    <div className={style.centrar}>
      <div className={style.contenedor}>
          <div className={style.sticky}>
            <div className={style.botones}>
              <button className={`${state === 'brandBuilding' ? style.select:style.noSelect}`} onClick={() => {filtrar('Prueba', 'brandBuilding')}}>Brand Building</button>
              <button className={`${state === 'brandManagement' ? style.select:style.noSelect}`} onClick={() => {filtrar('diseño', 'brandManagement')}}>Brand Management</button>
              <button className={style.noSelect}>Website Building</button>
              <button className={style.noSelect}>Custom Projects</button>
            </div>
          </div>
          <div className={style.projectsCont}>
            {
              tipo.projects ? tipo.projects.map(c => 
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
                  {/* <img src={c.images.portada} /> */}
                </div>
              </div>
              ) 
              :<h1>No hay nada</h1>
            }
          </div>
      </div>
    </div>
  )
}

export default React.memo(ContenidoWork);