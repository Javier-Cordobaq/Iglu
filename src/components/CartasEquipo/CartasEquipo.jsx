import React from 'react'
import style from '../CartasEquipo/CartasEquipo.module.css'

const CartasEquipo = () => {

    const integrantes = [
        {
            title: 'prueba0',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba1',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba2',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba3',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba4',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba5',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba6',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba7',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba8',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba9',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba10',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
        {
            title: 'prueba11',
            description: ' When we collab with <strong>Cora Creatives</strong>, we are the perfect match for local businessesthinking about going globalEach new project helps Cora grants scholarships to girls from low-income backgrounds Ecuador Two hearts are better than one'
        },
    ]

  return (
    <div className={style.centrar}>
        <div className={style.contenedorCards}>
            {integrantes.map(c => 
             <div className={style.cuadrado1}>
             <div className={style.contImagen}>
                 
             </div>
             <div className={style.contenidoTexto}>
                 <h1>{c.title}<br/>
                 to the world</h1>
                 <p>{c.description}</p>
                 <button>Need this duo</button>
             </div>
         </div>
            )   
            }
        </div>
    </div>
  )
}

export default CartasEquipo