import "./App.css";
import getUsers from "./data";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      // console.log(users);
    });
  }, []);

  return (
    <div id="app">
      <h1>List of Users</h1>

      <div className="container">
        <div className="users row">
          {users?.map((user, index) => (
            <div className="user col-2" key={`users-${index}`}>
              <img
                src={user.picture.large}
                alt={user.name.first + user.name.last}
              />
              <h3>
                {user.name.title} <br />
                {user.name.first} <br />
                {user.name.last} <br />
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
