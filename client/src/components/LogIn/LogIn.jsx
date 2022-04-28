import React, { useState } from 'react'
import style from '../LogIn/LogIn.module.css'
import Logo from '../../imagenes/logo.png'
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions';

const LogIn = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value}) 
    } 
    
     const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(logIn(state))  
    } 

  return (
    <div className={style.globalContainer}>
        
        <div className={style.contCentrado}>
            <div className={style.contImage}>
                <img src={Logo} alt='Not Found'/>
            </div>
            <form onSubmit={handleSumbit} className={style.contenedorInputs}>
                <div className={style.materialContainer}>
                    <p>Usuario</p>
                    <input
                    type='text'
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                    placeholder='Usuario'
                    />
                </div>
                <div className={style.materialContainer}>
                    <p>Contraseña</p>
                    <input
                    type='password'
                    name='password'
                    value={state.password}
                    onChange={handleChange}
                    placeholder='Contraseña'
                    />
                </div>
                <button>Acceder</button>
            </form>
            
        </div>
    </div>
  )
}

export default LogIn