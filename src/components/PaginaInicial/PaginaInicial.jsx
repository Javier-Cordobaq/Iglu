import React from 'react'
import Nav from '../Nav/Nav'
import Banner from '../Banner/Banner'
import CuadrosInfo from '../CuadrosInfo/CuadrosInfo'
import OurClients from '../OurClients/OurClients'
import Slider from '../Slider/Slider'

const PaginaInicial = () => {
  return (
    <div>
        <Nav/>
        <Banner/>
        <CuadrosInfo/>
        <OurClients/>
        <Slider/>
    </div>
  )
}

export default PaginaInicial