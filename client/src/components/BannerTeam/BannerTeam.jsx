import React from 'react'
import style from '../BannerTeam/BannerTeam.module.css'

const BannerTeam = () => {
  return (
    <div className={style.container}>
    <div className={style.animacion}></div>
      <div className={style.contedorContenido}>
          <h1 className={style.texto1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit !</h1>
          <h2 className={style.textoBottom}>Encuentra el poder de tu marca</h2>
          <button>Set up a Meeting</button>
          <p className={style.work}>See our work</p>
      </div>
  </div>
  )
}

export default BannerTeam