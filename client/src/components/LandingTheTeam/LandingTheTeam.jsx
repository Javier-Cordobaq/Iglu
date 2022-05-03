import React from 'react'
import Nav from '../Nav/Nav'
import BannerTeam from '../BannerTeam/BannerTeam'
import CartasEquipo from '../CartasEquipo/CartasEquipo'
import OurFriends from '../OurFriends/OurFriends'
import AliesTeam from '../AliesTeam/AliesTeam'
import Footer from '../Footer/Footer'
import style from '../LandingTheTeam/LandingTheTeam.module.css'

const LandingTheTeam = () => {

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
        <Nav/>
        <BannerTeam/>
        <CartasEquipo/>
        <OurFriends/>
        <AliesTeam/>
        <Footer/>
        <div data-aos="zoom-in-up" data-aos-duration="1200" className={style.buttonToTop} onClick={toTop}>
          <span className="material-icons-outlined">
          expand_less
          </span>
        </div>
    </div>
  )
}

export default LandingTheTeam