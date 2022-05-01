import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import NavAdmin from '../NavAdmin/NavAdmin'
import style from './SubirProyectos.module.css'
import { postProjects } from '../../redux/actions'

const SubirProyectos = () => {
  
  const dispatch = useDispatch();

  const [creators, setCreators] = useState({
      name: '',
      task: ''
    })
  
  const [files, setFiles] = useState('')

  const [social, setSocial] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
  })

  const [state, setState] = useState({
    name: "",
    description: "",
    url: "",
    images:{
      portada: 'https://img.freepik.com/psd-gratis/mockup-lata-refresco_23-2148037266.jpg?size=626&ext=jpg',
      apoyo1: 'https://antocas.com/wp-content/uploads/2015/11/soda-fria-mockup.jpg'
    },
    color:"",
    socialNetworks:{},
    type:"Prueba",
    creators:[
        {
            name:"Alvaro Vega",
            task: "Full-Stack developer"
        }, 
    ]
  })

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value}) 
  } 

  const handleChangeSocial = (e) => {
    setSocial({...social, [e.target.name]: e.target.value}) 
    setState({...state, socialNetworks: social})
  } 

  const handleImage = (e) => {
    setFiles(...files, e.target.file)
    setState({...state, images: files})
  } 

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(postProjects(state))  
  } 

  return (
    <div className={style.paraUbicarNav}>
      <NavAdmin/>
      <div className={style.centrar}>
        <form onSubmit={handleSumbit} className={style.contInputs}>
          <h2>Subir Proyectos</h2>

          <input 
          type="box" 
          placeholder='Name'
          className={style.inputs}
          name='name'
          value={state.name}
          onChange={handleChange}
          />

          <input 
          type="url" 
          placeholder='Url proyecto'
          className={style.inputs}
          name='url'
          value={state.url}
          onChange={handleChange}
          />

          <input 
          multiple
          type="file" 
          className={style.inputs}
          onChange={(e) => {handleImage(e)}}
          />

          <input 
          type="color" 
          className={style.inputs}
          name='color'
          value={state.color}
          onChange={handleChange}
          />
          <div>

          </div>
          <button>Subir</button>
        </form>
        <form className={style.contInputs}>
            <h2>Redes Sociales</h2>
            <input
            type="text"
            placeholder='Facebook'
            className={style.inputs}
            name='facebook'
            value={social.facebook}
            onChange={handleChangeSocial}
            />

            <input 
            type="text" 
            placeholder='Instagram'
            className={style.inputs}
            name='instagram'
            value={social.instagram}
            onChange={handleChangeSocial}
            />

            <input 
            type="text" 
            placeholder='Twitter'
            className={style.inputs}
            name='twitter'
            value={social.twitter}
            onChange={handleChangeSocial}
            />

          <textarea 
          className={style.description}
          type="text"  
          placeholder='Descripcion' 
          name="description" 
          rows="6" 
          onChange={handleChange} 
          required
          />
          </form>
      </div>
    </div>
  )
}

export default React.memo(SubirProyectos);