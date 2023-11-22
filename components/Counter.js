import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { loginUser } from '../loginReducer';
import {fetchProducts} from '../productsReducer';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  // const productsList = useSelector(state => state.products.products)
  // const errorMsg = useSelector(state => state.products.error)
  const recievedToken = useSelector(state => state.login.token)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  dispatch(fetchProducts())
  const loginHandler = (e) => {
    e.preventDefault();
    // axios.post('https://fakestoreapi.com/auth/login',{username,password})
    // .then(response => console.log(response.data.token))
    dispatch(loginUser(username,password))
    console.log(recievedToken)
  }
  // console.log(productsList)
  // console.log(errorMsg)
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({type: "INC"})}>Increase</button>
      <button onClick={() => dispatch({type: "ADDBY", payload: 10})}>Add by 10</button>
      <button onClick={() => dispatch({type: "DEC"})} disabled={counter === 0}>Decrease</button>
      <div>
        <button onClick={() => dispatch({type: "RST"})}>Reset</button>
      </div>
      <br/>
      <form onSubmit={loginHandler}>
        <div>
          <label>Enter username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <label>Enter password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Counter;