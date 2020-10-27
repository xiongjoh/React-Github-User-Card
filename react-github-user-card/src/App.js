import React from 'react'
import axios from 'axios'

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user:{},
    }
  }

  fetchUserData = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      // console.log(res.data)
      this.setState({
        user:res.data
      })
      return res.data.followers_url
    })
    .then(followerURL => {
      // console.log(followerURL)
      axios.get(followerURL)
      .then(res => {
        // console.log(res.data)
        this.setState({
          user:{...this.state.user,
          follower_data:res.data}
        })
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })

  }

  componentDidMount() {
    this.fetchUserData('xiongjoh')
  }

  render() {
    return (
      <div className="main container">
        <h2>Name: {this.state.user.name}</h2>
        <h4>Follower Names: </h4>
        <p>
          {Array.isArray(this.state.user.follower_data) 
            && this.state.user.follower_data.map(follower => follower.login).join(', ')}
        </p>
      </div>
    )
  }
}

export default App;
