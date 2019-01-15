import React, { Component } from "react";

class Dashboard extends Component {

  async componentDidMount() {
    const data = await fetch('https://randomuser.me/api/?nat=gb&results=5', {method: 'get'});
    const users = await data.json();
    const appliedUsers =  users.results.map(user => {
      user.status = 'applied';
      return user;
    });
    console.log('appliedUsers', appliedUsers)
  }

  render() {
    return <h1>Hello!</h1>
  }
}

export default Dashboard