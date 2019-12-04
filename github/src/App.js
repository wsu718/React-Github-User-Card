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
      gitHubFollowers: [],
      userInput: ''
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userId !== this.state.userId) {
      console.log('new userId');
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
    }

  handleChanges = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  getNewUser = event => {
    event.preventDefault();
    console.log();
    this.setState({
    userId: this.state.userInput
    });
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>

        <div className='search'>
          <h2>Search for new user:</h2>
          <input type="text" value={this.state.userInput} onChange={this.handleChanges}/>
          <button onClick={this.getNewUser}>Get new user</button>
        </div>

        <h2>Your user: {`${this.state.userId}`}</h2>
        <UserCard gitHubUserContent={this.state.gitHubUserContent}/>
        <h2>{`${this.state.userId}`}'s followers</h2>
        <FollowerList gitHubFollowers={this.state.gitHubFollowers}/>
        
      </div>
    )  
  }
};

export default App;

