import React, { useState } from 'react'
import style from '../OurClients/OurClients.module.css'

const OurClients = () => {

    const [state, setState] = useState('')

  return (
    <div>
        <div className={style.contTop}>
            <h1>Our Clients</h1>
            <div className={style.contBotones}>
                <button className={`${state === 'empresas' ?style.seleccionado : style.noSeleccionado}`} onClick={() => setState('empresas')}>
                    Empresas
                </button>
                <button className={`${state === 'emprendedores' ?style.seleccionado : style.noSeleccionado}`} onClick={() => setState('emprendedores')}>
                    Emprendedores
                </button>
                <button className={`${state === 'artistas' ?style.seleccionado : style.noSeleccionado}`} onClick={() => {setState('artistas')}}>
                    Artistas
                </button>
            </div>
        </div>
        <div>
            {state === 'empresas' ? <h1>Empresas</h1> : state === 'emprendedores' ? <h1>Emprendedores</h1> : <h1>Artistas</h1>}
        </div>
    </div>
  )
}

export default OurClients