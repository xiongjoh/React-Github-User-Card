import React from 'react'
import axios from 'axios'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import styled from 'styled-components'

import './App.css';
import UserCard from './components/UserCard'

const StyledContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
form {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 2rem;
  button {
    margin: .5rem;
    outline: none;
    border: none;
    padding: .4rem .7rem;
    border-radius: .2rem;
    :hover {
      background-color: rgb(222,222,222);
      transition: background-color 0.3s ease-in-out;
    }
    :active {
      color: rgb(240,240,240);
      background-color: rgb(20,20,20);
      transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
    }
  }
}
.flippy-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.flippy-card {
}
.user-flippy {
  padding: 3rem;
  border: 5px solid grey;
  border-radius: 1rem;
}
`


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user:{},
      searchInput: '',
      isFlipped: false,
    }
  }

  onChange = (e) => {
    const { value } = e.target
    this.setState({
      searchInput: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.fetchUserData(this.state.searchInput)
    this.setState({
      isFlipped: !this.state.isFlipped,
    })
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
    this.fetchUserData('dombruno')
  }

  render() {
    return (
      <StyledContainer className="main container">
        <form onSubmit={this.onSubmit}>
          <h2>Search for GitHub User</h2>
          <label>
            <input
            type="text"
            name="searchInput"
            value={this.state.searchInput}
            onChange={this.onChange}
            />
          </label>
          <button>Search</button>
        </form>
        <Flippy
        flipOnClick={false}
        isFlipped={this.state.isFlipped}
        flipDirection="vertical"
        >
          <FrontSide className="user-flippy"><UserCard userData={this.state.user}/></FrontSide>
          <BackSide className="user-flippy"><UserCard userData={this.state.user}/></BackSide>
        </Flippy>
      </StyledContainer>
    )
  }
}

export default App;

