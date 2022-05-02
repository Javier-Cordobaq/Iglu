import React from 'react'
import style from '../NavAdmin/NavAdmin.module.css'
import Logo from '../../imagenes/logo.png'
import {Link} from 'react-router-dom'

const NavAdmin = () => {

  const home = '/admin'
  const subirproyectos = '/subirproyectos'
  const subirtrabajos = '/subirtrabajos'
  const proyectos = '/proyectos'
  const ruta = window.location.pathname

  return (
    <div className={style.contenedor}>
    <nav className={style.contNav}>
        <div className={style.contImage}>
                <img src={Logo} alt='Not Found'/>
        </div>
          <ul className={style.nav}>
            <li className={`${ruta === home ? style.select:style.noSelect}`}><Link to='/admin'>Inicio</Link></li>
            <li id={style.proyectos} className={`${ruta === proyectos ? style.select:style.noSelect}`}><Link to='/proyectos'>Proyectos</Link>
              <ul>
                <li className={`${ruta === subirproyectos ? style.prueba:style.noSelect}`}><Link to='/subirproyectos'>Subir proyectos</Link></li>
              </ul>
            </li>
            <li className={`${ruta === subirtrabajos ? style.select:style.noSelect}`}><Link to='/subirtrabajos'>Trabajos</Link></li>
          </ul>
    </nav>
    </div>
  )
}

export default NavAdmin