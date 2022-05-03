import React from 'react'
import Nav from '../Nav/Nav'
import ContenidoWork from '../ContenidoWork/ContenidoWork'
import Footer from '../Footer/Footer'
import style from '../LandingWork/LandingWork.module.css'

const LandingWork = () => {

    const toTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

  return (
    <div>
        <Nav/>
        <ContenidoWork/>
        <Footer/>
        <div data-aos="zoom-in-up" data-aos-duration="1200" className={style.buttonToTop} onClick={toTop}>
          <span className="material-icons-outlined">
          expand_less
          </span>
        </div>
    </div>
  )
}

export default LandingWork