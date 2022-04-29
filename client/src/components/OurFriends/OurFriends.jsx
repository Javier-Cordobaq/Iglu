import React from 'react'
import style from '../OurFriends/OurFriends.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const OurFriends = () => {
  return (
    <div className={style.centrar}>
        <div className={style.contSlider}>
            <h1>Our Friends</h1>
            <Carousel showThumbs={false} centerSlidePercentage={90} centerMode={true} showIndicators={false} showStatus={false} showArrows={false} emulateTouch={true} interval={5000}>
            <div className={style.fila1}>
                <div className={style.cards}>
                    <p>Sebastián Barniol Compositor</p>
                </div>
                <div className={style.cards}>
                    <p>Andrés Benalcazar Motion graphics</p>
                </div>
                <div className={style.cards}>
                    <p>Yoya Gutierrez Creativa</p>
                </div>
            </div>
            <div className={style.fila1}>
                <div className={style.cards}>
                    <p>Sebastián Barniol Compositor</p>
                </div>
                <div className={style.cards}>
                    5
                </div>
                <div className={style.cards}>
                    6
                </div>
            </div>
            </Carousel>
            <Carousel showThumbs={false} centerMode={true} centerSlidePercentage={90} showStatus={false} showIndicators={false} showArrows={false} emulateTouch={true} interval={5000}>
            <div className={style.fila1}>
                <div className={style.cards}>
                    <p>Juan José Riplada Instalaciones multimedia</p>
                </div>
                <div className={style.cards}>
                    <p>Luis Pesanes Instalaciones multimedia</p>
                </div>
                <div className={style.cards}>
                    <p>Valeria Vernaza Fotógrafa</p>
                </div>
            </div>
            <div className={style.fila1}>
                <div className={style.cards}>
                <p>Juan José Riplada Instalaciones multimedia</p>
                </div>
                <div className={style.cards}>
                    5
                </div>
                <div className={style.cards}>
                    6
                </div>
            </div>
            </Carousel>
        </div>
    </div>
  )
}

export default React.memo(OurFriends);