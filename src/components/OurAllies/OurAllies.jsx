import React from 'react'
import style from '../OurAllies/OurAllies.module.css'

const OurAllies = () => {
  return (
    <div className={style.centrar}>
        <div className={style.title}>
            <h1>Our Allies</h1>
        </div>
            <div className={style.contTop}>
                <div className={style.izquierdaTop}>
                    <div className={style.informaciónIzquierdaTop}>
                        <h1>Your next business<br/>
                        idea starts here.</h1>
                        <p>If you don’t know where to start, this is for you.</p>
                        <p>We collab wirth <strong>District Business Developoment</strong><br/>
                        and their Inside Out Innovation method, we’ll build<br/>
                        your business from zero, exceeding your<br/>
                        expectations (and your potential client’s too!)</p>
                        <p>You’ll end up with a tested minimum viable<br/>
                        product and a clear and compelling brand that<br/>
                        works</p>
                        <p>Are you ready?</p>
                        <button>Check it out</button>
                    </div>
                    <div className={style.contenedorImagen}>

                    </div>
                </div>
                    <div className={style.cuadrado1}>
                        <div className={style.contImagen}>
                            
                        </div>
                        <div className={style.contenidoTexto}>
                            <h1>Open up your heart<br/>
                            to the world</h1>
                            <p>
                            When we collab with <strong>Cora Creatives</strong>, we are
                            the perfect match for local businesses<br/>
                            thinking about going global.<br/>
                            Each new project helps Cora grants<br/>
                            scholarships to girls from low-income<br/>
                            backgrounds in Ecuador.<br/>
                            Two hearts are better than one!
                            </p>
                            <button>Need this duo</button>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default OurAllies