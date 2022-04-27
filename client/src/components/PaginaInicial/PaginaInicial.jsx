import React from 'react'
import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'
import CuadrosInfo from '../CuadrosInfo/CuadrosInfo'
import OurClients from '../OurClients/OurClients'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import CuadrosBottom from '../CuadrosBottom/CuadrosBottom'
import OurAllies from '../OurAllies/OurAllies'
import style from '../PaginaInicial/PaginaInicial.module.css'


const PaginaInicial = () => {

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={style.contenedor}>
        <Nav/>
        <Banner/>
        <CuadrosInfo/>
        <OurClients/>
        <Slider/>
        <CuadrosBottom/>
        <OurAllies/>
        <Footer/>
        <div data-aos="zoom-in-up" data-aos-duration="1200" className={style.buttonToTop} onClick={toTop}>
          <span class="material-icons-outlined">
          expand_less
          </span>
        </div>
    </div>
  )
}

export default PaginaInicial