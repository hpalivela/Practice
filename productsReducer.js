import axios from "axios";

export const fetchProducts = () => {
    return (dispatch => {
        dispatch({
            type: "FETCH_USERS"
        })
        try{
            const response = axios.get('https://fakestoreapi.com/products');
            const products = response.data;
            dispatch({
                type: "FETCH_SUCCESS",
                payload: products
            })
        }catch(e){
            dispatch({
                type: "FETCH_FAIL",
                payload: e.message
            })
        }
    })
}

const initialState = {
    isLoading: false,
    products: [],
    error:null
}

const productsReducer = (state=initialState,action) =>{
    switch(action.type){
        case "FETCH_USERS":
            return {...state,isLoading:true}
        case "FETCH_SUCCESS":
            return {...state,isLoading:false,products:action.payload}
        case "FETCH_FAIL":
            return {...state,isLoading:false,error:action.payload}
        default :
            return state;
    }
}

export default productsReducer;