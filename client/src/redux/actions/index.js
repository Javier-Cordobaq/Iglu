import axios from 'axios' 

export const INGLES = 'INGLES'
export const FILTRO = 'FILTRO'
export const LOG_IN = 'LOG_IN'
export const POST_PROJECTS = 'POST_PROJECTS'
export const SET_MENSAJE = 'SET_MENSAJE'
export const GET_TIPOS = 'GET_TIPOS'
export const GET_PROJECTS_BY_TYPE = 'GET_PROJECTS_BY_TYPE'
export const POST_JOBS = 'POST_JOBS'
export const GET_JOBS = 'GET_JOBS'
export const DELETE_JOBS = 'DELETE_JOBS'

export const filtro = (info) => async dispatch => {
    return dispatch({
        type: FILTRO,
        payload: info
    })
}
export const cambiarIngles = (idioma) => async dispatch => {

    dispatch({
        type: INGLES,
        payload: idioma
    })
}
export const logIn = (info) => async dispatch => {
    try{
        const json = await axios.post(`http://localhost:5000/admin/admin-login`, info)
        if (json.status === 200){
            return dispatch({
                type: LOG_IN,
                payload: true
            })
        }
    }
    catch (error) {
        console.log(error, 'Errores')
        return dispatch({
            type: LOG_IN,
            payload: error.response.data.errors
        })
    }
}
export const postProjects = (info) => async dispatch => {
    try{
        const json = await axios.post(`http://localhost:5000/project/create-project`, info)
        if (json.status === 200){
            return dispatch({
                type: POST_PROJECTS,
                payload: true
            })
        }
    }
    catch (error) {
        console.log(error, 'Errores')
        return dispatch({
            type: POST_PROJECTS,
            payload: error.response.data.errors
        })
    }
}
export const postJobs = (info) => async dispatch => {
    try{
        const json = await axios.post(`http://localhost:5000/jobs/create-job`, info)
        if (json.status === 200){
            return dispatch({
                type: POST_JOBS,
                payload: true
            })
        }
    }
    catch (error) {
        console.log(error, 'Errores')
        return dispatch({
            type: POST_JOBS,
            payload: error.response.data.errors
        })
    }
}
export const getProjectsByType = (tipo) => async dispatch => {
        const json = await axios.get(`http://localhost:5000/project/type/${tipo}`)
        return dispatch({
                type: GET_PROJECTS_BY_TYPE,
                payload: json.data
            })
}
export const getJobs = () => async dispatch => {
        const json = await axios.get(`http://localhost:5000/jobs/all-jobs`)
        return dispatch({
            type: GET_JOBS,
            payload: json.data
        })
}
export const deleteJobs = (_id) => async dispatch => {
    const json = await axios.delete(`http://localhost:5000/jobs/delete/${_id}`)
    return dispatch({
        type: DELETE_JOBS,
        payload: json.data
    })
}
