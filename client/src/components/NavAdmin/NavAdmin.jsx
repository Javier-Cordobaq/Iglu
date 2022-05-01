import React from 'react'
import style from '../NavAdmin/NavAdmin.module.css'
import Logo from '../../imagenes/logo.png'
import {Link} from 'react-router-dom'

const NavAdmin = () => {
  return (
    <div className={style.contenedor}>
    <nav className={style.contNav}>
        <div className={style.contImage}>
                <img src={Logo} alt='Not Found'/>
        </div>
          <ul className={style.nav}>
            <li><Link to='/admin'>Inicio</Link></li>
            <li className={style.proyectos}><Link to='/admin'>Proyectos</Link>
              <ul>
                <li><Link to='/subirproyectos'>Subir proyectos</Link></li>
              </ul>
            </li>
            <li className={style.proyectos}><Link to='/admin'>Trabajos</Link>
              <ul>
                <li><Link to='/subirtrabajos'>Subir trabajos</Link></li>
              </ul>
            </li>
            <li><a href="">Contacto</a></li>
          </ul>
    </nav>
    </div>
  )
}

export default NavAdmin