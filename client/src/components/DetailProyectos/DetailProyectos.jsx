import React, {useEffect} from 'react'
import style from '../DetailProyectos/DetailProyectos.module.css'
import { getProjectsById, reset } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Nav from '../Nav/Nav';

const DetailProyectos = () => {

  const {_id} = useParams();

  const detail = useSelector(c => c.detail)
  console.log(detail)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjectsById(_id))
    return () => {dispatch(reset())}
}, [])

  return (
    <div>
      <Nav/>
      <div style={{backgroundImage: `url(${detail.length === 0 ? null:detail.project.images.portada})`}} className={style.centrar}>
          <div className={style.contenedor}>
            <div className={style.izquierda}>
              <h1 style={{color: `${detail.length === 0 ? null:detail.project.color}`}}>{detail.length !== 0 ? detail.project.name:null}</h1>
            </div>
            <div className={style.derecha}>
            <Carousel className={style.Slider} showIndicators={false} showThumbs={false} showStatus={false} autoPlay={true} emulateTouch={true} interval={7000} infiniteLoop={true}>
               <div className={style.imagenes}>
                  <img src={detail.length !== 0 ? detail.project.images.portada:null} alt=''/>
               </div>
               <div className={style.imagenes}>
                  <img src={detail.length !== 0 ? detail.project.images.image1:null} alt=''/>
               </div>
               <div className={style.imagenes}>
                  <img src={detail.length !== 0 ? detail.project.images.image2:null} alt=''/>
               </div>
            </Carousel>
            <p>{detail.length !== 0 ? detail.project.description:null}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DetailProyectos