import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import { fetchUsers } from "../usersReducer";

const Contactus = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.usersList);
  // const [users, setUsers] = useState([]);
  useEffect(() => {
    dispatch(
      fetchUsers()
    )
    // axios("https://jsonplaceholder.typicode.com/users")
    // .then(json => setUsers(json.data))
  }, [dispatch]);
  // console.log(users);
  return (
    <div>
      <h1>Contact details</h1>
      <ul>
      {users.map(user => {
        return(
            <li key={user.id}>{user.email}</li>
        )
      })}
      </ul>
    </div>
  );
};

export default Contactus;
