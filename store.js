import {applyMiddleware, createStore} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';
import loginReducer from './loginReducer';
import productsReducer from './productsReducer';



const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    login: loginReducer,
    products: productsReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;