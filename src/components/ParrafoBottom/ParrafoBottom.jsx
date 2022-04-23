import React from 'react'
import style from '../ParrafoBottom/ParrafoBottom.module.css'
import logo from '../../imagenes/logo.png'

const ParrafoBottom = () => {
  return (
    <div className={style.centrar}> 
        <div className={style.contenedor}>
            <div className={style.contLogo}>
                <img src={logo} alt=''/>
            </div>
            <p>Dear and daring entrepeneur,</p>
            <p>Iglú branding was built to serve you.<br/>
            We promise to help you find and unleash the power of your brand:<br/>
            that concept that makes it unique, current, competent, and that will be messaged<br/>
            clearly through your brand’s voice, look & feel and music.</p>
            <h2>Our mission is to build powerful brands that connect with your team and gets your
            guests and consumers to choose and love your business.</h2>
            <button>Meet the team</button>
        </div>
    </div>
  )
}

export default ParrafoBottom