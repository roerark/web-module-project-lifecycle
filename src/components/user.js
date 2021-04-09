import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/joepark")
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { user } = this.state;

    if (!this.state.user) return <p>loading data...</p>;

    return (
      <div>
        <img
          style={{ width: "150px", borderRadius: "50%" }}
          src={user.avatar_url}
          alt={user.name}
        />
        <h3>{user.name}</h3>
        <p>{user.login}</p>
        <p>repos:{user.public_repos}</p>
        <p>followers:{user.followers}</p>
        <p>following:{user.following}</p>
      </div>
    );
  }
}

export default User;
