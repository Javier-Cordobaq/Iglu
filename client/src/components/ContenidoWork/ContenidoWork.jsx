import React, {useEffect, useState} from 'react'
import style from '../ContenidoWork/ContenidoWork.module.css'
import {useDispatch, useSelector} from 'react-redux'
import instagram from '../../imagenes/instagram.png'
import { getProjectsByType, getJobs } from '../../redux/actions'
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'

const ContenidoWork = () => {

  const [state, setState] = useState('')

  const dispatch = useDispatch();

  const filtrar = (tipo) => {
    dispatch(getProjectsByType(tipo))
    setState(tipo)
  }

  const tipo = useSelector(c => c.tipo)
  const jobs = useSelector(c => c.jobs)

  useEffect(() => {
    dispatch(getJobs())
  }, []) 

  useEffect(() => {
  if(jobs.length !== 0){
    dispatch(getProjectsByType(jobs.job[0].name))  
    setState(jobs.job[0].name)
  }
  }, [jobs]) 

  return (
    <div className={style.centrar}>
      <div className={style.contenedor}>
          <div className={style.sticky}>
            <div className={style.botones}>
              {
                jobs.length !== 0 ? jobs.job.map(c => 
                  <button className={`${state === c.name ? style.select:style.noSelect}`} onClick={() => {filtrar(c.name)}} key={c._id}>{c.name}</button> 
                )
                :
                null
              }
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
                    <Link to={`/detail/${c._id}`}>
                      <button>Ver más</button>
                    </Link>
                </div>
                <div className={style.contImg}>
                  <img src={c.images.portada} alt=''/>
                </div>
              </div>
              ) 
              :
              <Spinner/>
            }
          </div>
      </div>
    </div>
  )
}

export default React.memo(ContenidoWork);