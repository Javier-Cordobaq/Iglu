import React from 'react'
import style from '../AliesTeam/AliesTeam.module.css'

const AliesTeam = () => {
  return (
    <div className={style.centrar}>
        <div className={style.title}>
            <h1>Our Allies</h1>
        </div>
        <div className={style.contenedor}>
                <div className={style.contCards}>
                    <div className={style.cuadrado}>
                        <h1>DSTRCT</h1>
                    </div>
                    <div className={style.contText}>
                        <h1>Need to build<br/>
                        your business idea?</h1>
                        <p>Te ayudamos a desarrollar tu estrcutrua<br/>
                        de negocio, desde tu idea inicial hasta<br/>
                        un mínimo producto viable con una<br/>
                        marca clara, y un testing a tu cliente<br/>
                        inicial</p>
                    </div>
                </div>
                <div className={style.contCards}>
                    <div className={style.cuadrado}>
                        <h1>CORA</h1>
                    </div>
                    <div className={style.contText}>
                        <h1>Brave brands for
                        todays world</h1>
                        <p>Te ayudamos a desarrollar tu estrcutrua<br/>
                        de negocio, desde tu idea inicial hasta<br/>
                        un mínimo producto viable con una<br/>
                        marca clara, y un testing a tu cliente<br/>
                        inicial</p>
                    </div>
                </div>
                <div className={style.contCards}>
                    <div className={style.cuadrado}>
                        <h1>BALBOA</h1>
                    </div>
                    <div className={style.contText}>
                        <h1>Productora<br/>
                        Audiovisual</h1>
                        <p>No tienes por qué frustrarte cada vez<br/>
                        que te toca escribir textos en tu<br/>
                        comunicaciónl</p>
                    </div>
                </div>
        </div>
        <div className={style.textoBottom}>
            <h1>Lorem ipsum dolor oo sit amet<br/>
            consectetur adipiscing :) elit !!!!</h1>
            <h2>ENCUENTRA EL PODER DE TU MARCA</h2>
            <button>Set up a Meeting</button>
        </div>
    </div>
  )
}

export default AliesTeam