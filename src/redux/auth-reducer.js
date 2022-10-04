import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
            }
        case TOGGLE_IS_AUTH:
            return {
                ...state,
                isAuth: action.auth
            }
        default:
            return state
    }
}

export const setAuthUsersData = (id, email, login) => ({type: SET_USER_DATA, id, email, login})
export const toggleIsAuth = (auth) => ({type: TOGGLE_IS_AUTH, auth})
export const authUser = () => (dispatch) => {
    authAPI.authUser().then(data => {
        if(data.resultCode === 0){
            let {id, email, login} = data.data
            dispatch(setAuthUsersData(id, email, login))
            dispatch(toggleIsAuth(true))
        }
    })
}