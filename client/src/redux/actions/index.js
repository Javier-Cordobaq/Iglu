import axios from 'axios'

export const INGLES = 'INGLES'
export const FILTRO = 'FILTRO'
export const LOG_IN = 'LOG_IN'
export const SET_MENSAJE = 'SET_MENSAJE'
export const GET_TIPOS = 'GET_TIPOS'
export const POST_USUARIOS = 'POST_USUARIOS'

export const filtro = (info) => async dispatch => {
    return dispatch({
        type: FILTRO,
        payload: info
    })
}
export const cambiarIngles = () => async dispatch => {

    dispatch({
        type: INGLES,
        payload: "Cambiando a ingles"
    })
}

export const setMensaje = () => async dispatch => {

    return dispatch({
        type: SET_MENSAJE,
        payload: 'Seteando mensaje'
    })

}


export const getTipos = () => async dispatch => {

    const json = await axios.get(`/tipos`)

    return dispatch({
        type: GET_TIPOS,
        payload: json.data
    })

}

export const postUsuarios = (info) => async dispatch => {

    const json = await axios.post(`/usuarios`, info)

    return dispatch({
        type: POST_USUARIOS,
        payload: json.data
    })

}

export const logIn = (usuario) => async dispatch => {
    /* const json = await axios.post(`/admin`, usuario) */
    return dispatch({
        type: LOG_IN,
        payload: usuario
    })
}
