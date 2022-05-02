import React, {useState} from 'react'
import style from '../SubirTrabajos/SubirTrabajos.module.css'
import { useDispatch } from 'react-redux'
import { postJobs, getJobs } from '../../redux/actions'
import NavAdmin from '../NavAdmin/NavAdmin'
import TablaJobs from '../TablaJobs/TablaJobs'

const SubirTrabajos = () => {

    const dispatch = useDispatch();

    const [state,setState] = useState({
        name: '',
        description: ''
    })

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value}) 
    } 

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(postJobs(state))  
        setTimeout(() => {dispatch(getJobs())}, 300) 
        setState({
            name: '',
            description: ''
        })
      } 

  return (
    <div className={style.container}>
        <NavAdmin/>
        <div className={style.contenedorContenido}>
            <TablaJobs/>
            <form className={style.formulario} onSubmit={handleSumbit}>
                <h2>Subir trabajos.</h2>
                <input 
                type="text" 
                placeholder='Nombre'
                className={style.inputs}
                name='name'
                value={state.name}
                onChange={handleChange}
                />
                <textarea 
                className={style.description}
                placeholder='Descripcion' 
                name="description" 
                value={state.description}
                rows="6" 
                onChange={handleChange} 
                />
                <button>Subir</button>
            </form>
        </div>
    </div>
  )
}

export default SubirTrabajos