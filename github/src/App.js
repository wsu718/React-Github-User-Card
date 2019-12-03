import React from 'react';
import './App.css';
import axios from 'axios';

import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: 'wsu718',
      gitHubUserContent: [],
      gitHubFollowers: []
    }
  };

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.userId}`)
    .then(response => {
      this.setState({
        gitHubUserContent: response.data
      })
    })
    .catch(error => {
      console.log('Error:', error.message);
    })
    axios.get(`https://api.github.com/users/${this.state.userId}/followers`)
    .then(response => {
      this.setState({
      gitHubFollowers: response.data
      });
    })
    .catch (error => {
      console.log('Error:', error.message);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        <h2>Your user: {`${this.state.userId}`}</h2>
        <UserCard gitHubUserContent={this.state.gitHubUserContent}/>
        <h2>{`${this.state.userId}`}'s followers</h2>
        <FollowerList gitHubFollowers={this.state.gitHubFollowers}/>
      </div>
    )  
  }
};

export default App;

