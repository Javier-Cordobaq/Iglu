import React from 'react'
import style from '../CuadrosInfo/CuadrosInfo.module.css'
import { useSelector } from 'react-redux'

const CuadrosInfo = () => {
    const idioma = useSelector(state => state.idioma)
  return (
    <div className={style.contenedor}>
        <div className={style.contTop}>
            <div className={style.izquierdaTop}>
                <div className={style.informaciónIzquierdaTop}>
                    <h3>{'Featured Project > Gymage Miami'}</h3>
                    <h1>{idioma === "español" ? "Fitness social reinventado" : "Social Fitness reimagined"}</h1>
                    <p>A brave new concept, a strong verbal
                    identity, and strategic social media plan.</p>
                    <p>This - and its incredible culture and architecture- is what’s shaping Gymage Lifestyle Resort to be the future of social fitness.</p>
                    <button>Check it out</button>
                </div>
                <div className={style.contenedorImagen}>

                </div>
            </div>
            <div className={style.derechaTop}>
                <h1>Do you have a brand that is...</h1>
                <div className={style.parrafos}>
                <span className="material-icons-outlined">check_circle</span><p>Not attractive to new costumers?</p>
                </div>
                <div className={style.parrafos}>
                <span className="material-icons-outlined">check_circle</span><p>Lacking recognition??</p>
                </div>
                <div className={style.parrafos}>
                <span className="material-icons-outlined">check_circle</span><p>{'Missing a unique look & feel?'}</p>
                </div>
                <div className={style.parrafos}>
                <span className="material-icons-outlined">check_circle</span><p>Staying behind the competition?</p>
                </div>
                <div className={style.parrafos}>
                <span className="material-icons-outlined">check_circle</span><p>Not helping you sell like you could?</p>
                </div>
                <div className={style.parrafos}>
                <span className="material-icons-outlined">check_circle</span><p>Not in touch with today’s trends?</p>
                </div>
                <div className={style.canHelp}>
                <p>...or, don’t have a brand at all!?</p>
                <h2>We can help!</h2>
                </div>
                <button>Set up a meeting</button>
            </div>
        </div>
        <div className={style.contenedorBottom}>
            <div className={style.cuadrado1}>
                <div className={style.contImagen}>
                    
                </div>
                <div className={style.contenidoTexto}>
                    <h2 className={style.parrafoArriba}>Services</h2>
                    <h1>Brand Building, Rebranding</h1>
                    <p>
                    Connect with your consumers (and even
                    your team!) with a powerful concept, a
                    clear message, and your brand’s own
                    voice, look and feel. Let’s build your
                    brand together! 
                    </p>
                    <button>Set up a Meeting</button>
                </div>
            </div>
            <div className={style.cuadrado2}>
                <div className={style.contImagen}>

                </div>
                <div className={style.contenidoTexto}>
                    <h2 className={style.parrafoArriba}>Our Work</h2>
                    <h1>Brand Management</h1>
                    <p>
                    Your marketing plan, social media
                    strategy, ads management, influencer
                    campaigns, and so much more!
                    We’ll help you keep telling your story.
                    </p>
                    <button>Set up a Meeting</button>
                </div>
            </div>
            <div className={style.cuadrado3}>
                <div className={style.contImagen}>

                </div>
                <div className={style.contenidoTexto}>
                    <h2 className={style.parrafoArriba}>Our Work</h2>
                    <h1>Custom Projects</h1>
                    <p>
                    What does your business need today?
                    Whether it’s a curated music playlist,
                    a new website, or any creative service that
                    needs to convey your brand essence,
                    we’ve got you covered.
                    </p>
                    <button>Set up a Meeting</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CuadrosInfo