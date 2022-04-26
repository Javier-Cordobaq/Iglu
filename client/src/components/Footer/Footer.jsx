import React from 'react'
import Logo from '../../imagenes/logo.png'
import style from './Footer.module.css'

export default function Footer(){

    return(
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={Logo} alt="" />
                </div>
                    <div className={style.navigation}>
                        <p>Navigation</p>
                        <ul className={style.rutas}>
                            <li><a href='#acerca'>Home</a></li>
                            <li><a href='#Bruss'>Work</a></li>
                            <li><a href='#productos'>Team</a></li>
                            <li><a href='#puntos'>Blog</a></li>
                            <li>Set up a Meeting</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                        <div className={style.socialMedia}>
                            <p>Social Media</p>
                            <ul className={style.rutas}>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Medium</li>
                            </ul>
                        </div>
                <div className={style.contact}>
                    <p>Find us</p>
                    <div className={style.contacto}>
                        <div className={style.cont}>
                        <p>Av. Francisco de Orellana
                        S34-135 y Calle 12
                        Guayaquil, Ecuador</p>
                        </div>
                        <div className={style.cont}>
                        <p>José Tamayo N23-75 e
                        Ignacio Veintimilla
                        Quito, Ecuador</p>
                        </div>
                    </div>
                </div>
                    <div className={style.ultimoContenido}>
                            <p></p>
                            <ul className={style.rutas}>
                            <li><a href='#acerca'>Instagram</a></li>
                            <li><a href='#Bruss'>Facebook</a></li>
                            <li><a href='#productos'>Team</a></li>
                            <li><a href='#puntos'>Blog</a></li>
                            <li>Set up a Meeting</li>
                            <li>Contact</li>
                            </ul>
                        </div>
            </div>
    )
}