import React from 'react'
import style from './SubirProyectos.module.css'

const SubirProyectos = () => {
  return (
    <div className={style.centrar}>
      <div className={style.contInputs}>
        <h1>Subir Proyectos</h1>
        <input 
        type="text" 
        placeholder='Name'
        className={style.inputs}
        />
         <input 
        type="box" 
        placeholder='Name'
        className={style.inputs}
        />
      </div>
    </div>
  )
}

export default SubirProyectos