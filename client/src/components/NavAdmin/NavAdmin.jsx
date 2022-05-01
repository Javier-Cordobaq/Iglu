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
        <ul>
            <Link to='/admin'><li>Home</li></Link>
            <Link to='/subirproyectos'><li>Proyectos</li></Link>
        </ul>
    </nav>
    </div>
  )
}

export default NavAdmin