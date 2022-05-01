import React, {useState} from 'react'
import style from '../SubirTrabajos/SubirTrabajos.module.css'
import { useDispatch } from 'react-redux'
import { postJobs } from '../../redux/actions'
import NavAdmin from '../NavAdmin/NavAdmin'
import TablaJobs from '../TablaJobs/TablaJobs'

const SubirTrabajos = () => {

    const dispatch = useDispatch();

    const [state,setState] = useState({
        name: '',
        description: ''
    })

    const [jobs, setJobs] = useState([])
    console.log(jobs)

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value}) 
      } 

    const handleAdd = () => {
        setState({
            name: '',
            description: ''
        })
        setJobs([...jobs, state])
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(postJobs(state))  
      } 

  return (
    <div className={style.container}>
        <NavAdmin/>
        <div className={style.contenedorContenido}>
            <div>
                <TablaJobs/>
            </div>
            <form className={style.formulario} onSubmit={handleSumbit}>
                <input 
                type="text" 
                placeholder='Nombre'
                className={style.inputs}
                name='name'
                value={state.name}
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder='Decripción'
                className={style.inputs}
                name='description'
                value={state.description}
                onChange={handleChange}
                />
                <span onClick={handleAdd}>Agregar creador</span>
                <button>Subir</button>
            </form>
        </div>
    </div>
  )
}

export default SubirTrabajos