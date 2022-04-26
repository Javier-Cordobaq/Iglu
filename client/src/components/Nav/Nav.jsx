import React, {useState} from 'react'
import style from '../Nav/Nav.module.css'
import logo from '../../imagenes/logo.png'
import botonWp from '../../imagenes/wpp.png'
import instagram from '../../imagenes/instagram.png'
import mensaje from '../../imagenes/mensaje.png'
import cel from '../../imagenes/cel.png'
import { Link } from 'react-router-dom' 

const Nav = () => {

    const [menu, setMenu] = useState(false)

    const principal = '/'
    const team = '/team'
    const ruta = window.location.pathname

  return (
    <div className={style.contenedorSticky}>
        <div className={`${ruta === principal ? style.contenedor:style.contenedorTeam}`}>
            <div className={`${ruta === principal ? style.logo:style.logoTeam}`}>
                <img src={logo} alt='' />
            </div>
            <div className={style.contenedorNavegacion}>
                <ul className={style.rutasUL}>
                    <Link to='/'><li className={`${ruta === principal ? style.home:style.noSelect}`}>Work</li></Link>
                    <Link to='/team'><li className={`${ruta === team ? style.team:style.noSelect}`}>The team</li></Link>
                    <li>Blog</li>
                    <li>Set up a Meeting</li>
                </ul> 
                    <div className={style.redesSociales}>
                            <img className={style.logos} src={instagram} alt="" />
                            <img className={style.logos} src={mensaje} alt="" />
                            <img className={style.logos} src={cel} alt="" />
                        <div className={style.get}>
                            <img src={botonWp} className={style.boton} alt="" onClick={()=>{window.location.href="https://wa.link/g3ku3o/"}}/>
                            <p>Get in touch!</p>
                        </div>
                        <div className={style.cambiarIdioma}>
                            <div className={style.textoCambioDeIdioma}>
                                <p>ESP</p>
                                <p>ENG</p>
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
        <div className={style.contendorNavCelular}>
            <div className={style.logo}>
                <img src={logo} alt='' />
            </div>
                <div>
                    <div className={style.filtros_cont}>        
                            <label>
                                <input 
                                className={style.input_filtros}
                                type='checkbox'
                                onChange={(c) => {setMenu(c.target.checked)}}
                                />
                                {menu === false ? 
                                <span className={`material-icons-outlined ${style.slider}`}>
                                menu
                                </span>
                                :
                                <span className="material-icons-outlined">
                                clear
                                </span>}                   
                            </label>
                    </div>  
                </div>
        </div>
        {/* Esto esta fuera del contenedor del nav para poder hacer la modal y se renderice en la parte de abajo */}
        {menu === true ? 
                    <div className={style.contenedorNavegacionMovil}>
                    <ul className={style.rutasUL}>
                        <li>Work</li>
                        <li>The team</li>
                        <li>Blog</li>
                        <li>Set up a Meeting</li>
                    </ul> 
                        <div className={style.redesSociales}>
                                <img className={style.logos} src={instagram} alt="" />
                                <img className={style.logos} src={mensaje} alt="" />
                                <img className={style.logos} src={cel} alt="" />
                        </div>
                        <div className={style.get}>
                                <img src={botonWp} className={style.boton} alt="" onClick={()=>{window.location.href="https://wa.link/g3ku3o/"}}/>
                                <p>Get in touch!</p>
                        </div>
                            <div className={style.cambiarIdioma}>
                                <div className={style.textoCambioDeIdioma}>
                                    <p>ESP</p>
                                    <p>ENG</p>
                                </div> 
                            </div>
                    </div>
                   : 
        null}
    </div>
  )
}

export default Nav