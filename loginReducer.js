import axios from "axios";
const BASE_URL = 'https://fakestoreapi.com/auth/login';

// export const  loginUser = ((username,password) => {
//     return async dispatch => {
//         dispatch({
//             type: "LOGIN_USER"
//         })
//         try{
//             const response = await axios.post(BASE_URL,{username,password});
//             const token = response.data.token;
//             dispatch({
//                 type: "LOGIN_SUCCESS",
//                 payload: token
//             })
//         }catch(e){
//             dispatch({
//                 type: "LOGIN_FAILURE",
//                 payload: e.message
//             })
//         }
//     }
// })

export const loginUser = (username,password) => {
    return async function(dispatch){
        dispatch({
            type: "LOGIN_USER"
        })
        try{
            const response = await axios.post(BASE_URL,{username, password})
            const token = await response.data.token;
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: token
            })
        }
        catch{
            dispatch({
                type:"LOGIN_FAIL",
                payload: "login failed"
            })
        }
    }
}

const loginInitialState = {
    isLogin: false,
    token: null,
    error: null
}

const loginReducer = (state = loginInitialState, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return {...state}
        case "LOGIN_SUCCESS":
            return {...state, isLogin:true, token:action.payload};
        case "LOGIN_FAILURE":
            return {...state, isLogin:false, error: action.payload};
        default:
            return state
    }
}

export default loginReducer;