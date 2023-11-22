import axios from "axios";

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({
            type:"FETCH_USERS"
        })
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if(response.data){
                    dispatch({
                        type: 'FETCH_SUCCESS',
                        payload: response.data
                    })
                }else{
                    dispatch({
                        type: 'FETCH_FAILURE',
                        payload: 'Not found data'
                    })
                }
            })
    }
}

const usersInitialState = {
    usersList: [],
    isLoading: false,
    error: null
}

const usersReducer = (state = usersInitialState, action) => {
    switch(action.type){
        case "FETCH_USERS":
            return {...state, isloading: true};
        case "FETCH_SUCCESS":
            return {...state, usersList: action.payload, isLoading: false};
        case "FETCH_FAILURE":
            return {...state, isLoading:false, error: action.payload}
        default:
            return state;
    }
}

export default usersReducer;