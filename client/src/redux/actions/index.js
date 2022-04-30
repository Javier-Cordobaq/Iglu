import axios from 'axios' 

export const INGLES = 'INGLES'
export const FILTRO = 'FILTRO'
export const LOG_IN = 'LOG_IN'
export const SET_MENSAJE = 'SET_MENSAJE'
export const GET_TIPOS = 'GET_TIPOS'

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
/* export const getTipos = () => async dispatch => {
    const json = await axios.get(`/tipos`)
    return dispatch({
        type: GET_TIPOS,
        payload: json.data
    })
}
*/
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
