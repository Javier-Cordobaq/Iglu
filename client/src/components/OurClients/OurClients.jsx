import React, { useState, useEffect } from 'react'
import style from '../OurClients/OurClients.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getClient } from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux'

const OurClients = () => {

    const [state, setState] = useState('empresas')

    const dispatch = useDispatch();
    const client = useSelector(c => c.client)
    console.log(client, 'Client')

    useEffect(() => {
        dispatch(getClient(state))
    }, [])

    const clients = (client) => {
        dispatch(getClient(client))
        setState(client)
    }

  return (
    <div>
        <div className={style.contTop}>
            <h1>Our Clients</h1>
            <div className={style.contBotones}>
                <button className={`${state === 'empresas'?style.seleccionado : style.noSeleccionado}`} onClick={() => {clients('empresas')}}>
                    Empresas
                </button>
                <button className={`${state === 'emprendedores'?style.seleccionado : style.noSeleccionado}`} onClick={() => {clients('emprendedores')}}>
                    Emprendedores
                </button>
                <button className={`${state === 'artistas'?style.seleccionado : style.noSeleccionado}`} onClick={() => {clients('artistas')}}>
                    Artistas
                </button>
            </div>
        </div>
        <div className={style.centrar}>
            <div className={style.contSlider}>
                {
                
                <Carousel infiniteLoop={true} showThumbs={false} interval={4000} autoPlay={true} centerSlidePercentage={30} centerMode={true} showIndicators={false} showStatus={false}>
                    {
                        client.length !== 0 ?  client.projects.map(c => 
                            <div key={c._id} className={style.cards}>
                                <img src={c.logo} alt=''/>
                            </div>)
                        :
                        null
                    }
                </Carousel> 
        
                }
            </div>
        </div>
    </div>
  )
}

export default OurClients