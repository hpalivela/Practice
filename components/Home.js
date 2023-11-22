import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredusers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const search = e.target.value;
    const updatedUsers = users.filter((user) => {
      if (search === "") return users;
      return user.title.includes(search.toLowerCase());
    });
    setFilteredusers(updatedUsers);
  };
  const data = filteredUsers.length > 0 ? filteredUsers : users;
  return (
    <div>
      <h1>Welcome</h1>
      <input
        type="search"
        onChange={searchHandler}
        placeholder="search by title"
      />
      <ul>
        {data.map((user) => {
          return <li key={user.id}>{user.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
