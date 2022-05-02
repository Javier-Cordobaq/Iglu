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

const containerStyle = {
  backgroundImage: `url(${detail.length !== 0 ? detail.project.name:null})`,
  width: "100%",
  height: "100%",
};

  return (
    <div>
      <Nav/>
      <div className={style.centrar}>
          <div style={{containerStyle}} className={style.contenedor}>
            <div className={style.izquierda}>
              <h1>{detail.length !== 0 ? detail.project.name:null}</h1>
            </div>
            <div className={style.derecha}>
            <Carousel /* showThumbs={false} */ showStatus={false} autoPlay={true} showArrows={false} emulateTouch={true} interval={5000} infiniteLoop={true}>
               <div>
                  <img src={detail.length !== 0 ? detail.project.images.portada:null} alt=''/>
               </div>
               <div>
                  <img src={detail.length !== 0 ? detail.project.images.image1:null} alt=''/>
               </div>
               <div>
                  <img src={detail.length !== 0 ? detail.project.images.image2:null} alt=''/>
               </div>
            </Carousel>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DetailProyectos