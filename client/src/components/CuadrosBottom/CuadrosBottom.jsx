import React from 'react'
import style from '../CuadrosBottom/CuadrosBottom.module.css'

const CuadrosBottom = () => {
  return (
    <div className={style.contenedor}>
        <div className={style.contTop}>
            <div className={style.cuadrado2}>
                <div className={style.contImagen}>

                </div>
                <div className={style.contenidoInputs}>
                    <p>Don’t miss our</p>
                    <h1>Special deals.</h1>
                    <p>Get them in your e-mail.</p>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Business / Project' />
                    <input type="text" placeholder='E-mail' />
                    <button>Suscribe to our Newsletter</button>
                </div>
            </div>
        <div className={style.izquierdaTop}>
            <div className={style.informaciónIzquierdaTop}>
                <h3>Blog</h3>
                <h1>This Week</h1>
                <h1>No Lego <br></br>
                    to Stand On</h1>
                <p>When we've got something great to say,
                we write a newsletter for brand teams.
                We curate the best of video, creativity
                and insights to inspire and delight.
                We won’t spam your inbox, we promise.</p>
                <button>Read More</button>
            </div>
            <div className={style.contenedorImagen}>

            </div>
        </div>
    </div>

    <div className={style.contenedorBottom}>
        <div className={style.cuadrado1}>
            <div className={style.contenidoTexto}>
                <h1>What happens now?</h1>
                <h2>Let’s get to business</h2>
                <p>1. Set up a meeting so we get to know your needs.</p>
                <p>2. Receive a personalized quote for your proyect.</p>
                <p>3. Let the creative proccess begin.</p>
                <p>4. Show the world the power of your brand!</p>
                <h2>It’s really that simple</h2>
                <button>Set up a Meeting</button>
            </div>
            <div className={style.chat}>
                <div data-aos="fade-up" className={style.mensajesIzquierda}>Hello! I need help!</div>
                <div data-aos="fade-up" className={style.alinearDerecha}>
                    <div className={style.mensajesDerecha}>What do you need?</div>
                </div>
                <div data-aos="fade-up" className={style.mensajesIzquierda}>A brand that works!</div>
                <div data-aos="fade-up" className={style.alinearDerecha}>
                    <div className={style.mensajesDerecha}>We got you.</div>
                </div>
            </div>
        </div>
     </div>

</div>
  )
}

export default CuadrosBottom