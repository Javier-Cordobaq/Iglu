import React, {useState} from 'react'
import style from '../Nav/Nav.module.css'
import logo from '../../imagenes/logo.png'
import botonWp from '../../imagenes/wpp.png'
import instagram from '../../imagenes/instagram.png'
import mensaje from '../../imagenes/mensaje.png'
import cel from '../../imagenes/cel.png'
import {cambiarIngles} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom' 

const Nav = () => {

    const [menu, setMenu] = useState(false)

    const dispatch = useDispatch();
    const idioma = useSelector(state => state.idioma)

    const principal = '/' 
    const work = '/work'
    const team = '/team'
    const meting = '/meting'
    const ruta = window.location.pathname

  return (
    <div className={style.contenedorSticky}>
        <div className={`${ruta === principal ? style.contenedor : ruta === team ? style.contenedorTeam: ruta === work ? style.contenedorWork:style.contenedorMeet}`}>
            <Link to='/'>
            <div className={`${ruta === principal ? style.logo:style.logoTeam}`}>
                <img src={logo} alt='' />
            </div>
            </Link>
            <div className={style.contenedorNavegacion}>
                <ul className={style.rutasUL}>
                    <Link to='/'><li className={`${ruta === principal ? style.home:style.noSelect}`}>Home</li></Link>
                    <Link to='/work'><li className={`${ruta === work ? style.work:style.noSelect}`}>{idioma === "español" ? "Trabajos" : "Work"}</li></Link>
                    <Link to='/team'><li className={`${ruta === team ? style.team:style.noSelect}`}>{idioma === "español" ? "El equipo" : "The Team"}</li></Link>
                    <Link to='/meting'><li className={`${ruta === meting ? style.meting:style.noSelect}`}>{idioma === "español" ? "Organizar una reunión" : "Set up a Meeting"}</li></Link>
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
                                <p onClick={()=>{dispatch(cambiarIngles('español'))}}>ESP</p>
                                <p onClick={()=>{dispatch(cambiarIngles('ingles'))}}>ENG</p>
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
        <div className={style.contendorNavCelular}>
            <Link to='/'>
                <div className={style.logo}>
                    <img src={logo} alt='' />
                </div>
            </Link>
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
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/work'><li>Work</li></Link>
                        <Link to='/team'><li>The team</li></Link>
                        <Link to='/meting'><li>Set up a Meeting</li></Link>
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

export default React.memo(Nav);