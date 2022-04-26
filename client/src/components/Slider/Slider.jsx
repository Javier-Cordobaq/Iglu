import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from '../Slider/Slider.module.css'

const Slider = () => {
  return (
    <div>
            <Carousel autoPlay={true} showArrows={false} emulateTouch={true} interval={5000} infiniteLoop={true}>
                <div className={style.imagenes}>
                    <h1>1</h1>
                </div>
                <div className={style.imagenes}>
                    <h1>2</h1>
                </div>
                <div className={style.imagenes}>
                    <h1>3</h1>
                </div>
                <div className={style.imagenes}>
                    <h1>4</h1>
                </div>
                <div className={style.imagenes}>
                    <h1>5</h1>
                </div>
                <div className={style.imagenes}>
                    <h1>6</h1>
                </div>
            </Carousel>
            <div className={style.centrar}>
            <div className={style.botonInfo}>
                <h1>Se parte de los emprendedores, artistas 
                y empresarios que encontraron y comunican
                el poder de su marca en todo lo que hacen.</h1>
                <button>Set up a Meeting</button>
            </div>
            </div>
    </div>
  )
}

export default Slider