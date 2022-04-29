import React, {useEffect, useState} from 'react'
import style from '../ContenidoWork/ContenidoWork.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {filtro} from '../../redux/actions'
import instagram from '../../imagenes/instagram.png'

const ContenidoWork = () => {

  const [state, setState] = useState('brandBuilding')
  
  const dispatch = useDispatch();

  const filtrar = (arreglo, state) => {
    dispatch(filtro(arreglo))
    setState(state)
  }

  const brandBuilding = [
    {
      name: 'Rosa Mezcal',
      description: 'We won’t spam your inbox, we promise.',
      color: '#664b40'
    },
    {
      name: 'Togo',
      description: 'We won’t spam your inbox, we promise.',
      color: '#4e5b61'
    }
  ]

  const brandManagement = [
    {
      name: 'Mulholz',
      description: 'We won’t spam your inbox, we promise.',
      color: '#6f8a46'
    },
    {
      name: 'Sunny',
      description: 'We won’t spam your inbox, we promise.',
      color: '#ef7d30'
    }
  ]

  const filtros = useSelector(state => state.filtro)

  useEffect(() => {
    dispatch(filtro(brandBuilding))
  }, [])

  return (
    <div className={style.centrar}>
      <div className={style.contenedor}>
          <div className={style.sticky}>
            <div className={style.botones}>
              <button className={`${state === 'brandBuilding' ? style.select:style.noSelect}`} onClick={() => {filtrar(brandBuilding, 'brandBuilding')}}>Brand Building</button>
              <button className={`${state === 'brandManagement' ? style.select:style.noSelect}`} onClick={() => {filtrar(brandManagement, 'brandManagement')}}>Brand Management</button>
              <button className={style.noSelect}>Website Building</button>
              <button className={style.noSelect}>Custom Projects</button>
            </div>
          </div>
          <div className={style.projectsCont}>
            {
              filtros.length !== 0 ? filtros.map(c => 
              <div className={style.cards}>
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