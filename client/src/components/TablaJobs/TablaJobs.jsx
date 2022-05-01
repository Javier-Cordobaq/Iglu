import React, { useEffect } from 'react'
import style from '../TablaJobs/TablaJobs.module.css'
import { getJobs, deleteJobs } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'

const TablaJobs = () => {

    const dispatch = useDispatch();

    const jobs = useSelector(c => c.jobs)

    useEffect(() => {
        dispatch(getJobs())
    }, [])

    const eliminar = (_id) => {
        dispatch(deleteJobs(_id))
        setTimeout(() => {dispatch(getJobs())}, 300)
    }

  return (
    <div className={style.contenedor}>
        {jobs.length !== 0 ? jobs.job.map(c => 
        <div className={style.card} key={c._id}>
            <p>{c.name}</p>
            <p>{c.description}</p>
            <span onClick={() => {eliminar(c._id)}} class="material-icons-outlined">
                clear
            </span>
        </div>
        )
        :<h1>Aun no hay trabajos</h1>
        }
    </div>
  )
}

export default TablaJobs