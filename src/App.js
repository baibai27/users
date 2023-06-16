import "./App.css";
import getUsers from "./data";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setFilteredUsers(users); // Initialize filteredUsers with all users
    });
  }, []);

  useEffect(() => {
    const filteredUsers = users?.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(filter.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filter.toLowerCase())
      );
    });
    setFilteredUsers(filteredUsers || []); // Update the filtered users state, not the users state
  }, [filter, users]);

  return (
    <div id="app">
      <h1>List of Users</h1>

      <div className="container">
        <input
          id="filter"
          className="form-control mb-3 form-control-lg"
          placeholder="Type to filter..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        <div className="users row">
          {filteredUsers?.map((user, index) => (
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
