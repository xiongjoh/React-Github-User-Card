import React from 'react'
import axios from 'axios'

import './App.css';
import UserCard from './components/UserCard'

const dummyUser = {
  "login": "DomBruno",
  "id": 10161702,
  "node_id": "MDQ6VXNlcjEwMTYxNzAy",
  "avatar_url": "https://avatars3.githubusercontent.com/u/10161702?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DomBruno",
  "html_url": "https://github.com/DomBruno",
  "followers_url": "https://api.github.com/users/DomBruno/followers",
  "following_url": "https://api.github.com/users/DomBruno/following{/other_user}",
  "gists_url": "https://api.github.com/users/DomBruno/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DomBruno/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DomBruno/subscriptions",
  "organizations_url": "https://api.github.com/users/DomBruno/orgs",
  "repos_url": "https://api.github.com/users/DomBruno/repos",
  "events_url": "https://api.github.com/users/DomBruno/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DomBruno/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dominick Bruno",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 114,
  "public_gists": 1,
  "followers": 34,
  "following": 27,
  "created_at": "2014-12-12T02:52:36Z",
  "updated_at": "2020-10-19T14:35:07Z",
  "follower_data": [
    {
        "login": "PhilHart23",
        "id": 40249697,
        "node_id": "MDQ6VXNlcjQwMjQ5Njk3",
        "avatar_url": "https://avatars3.githubusercontent.com/u/40249697?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/PhilHart23",
        "html_url": "https://github.com/PhilHart23",
        "followers_url": "https://api.github.com/users/PhilHart23/followers",
        "following_url": "https://api.github.com/users/PhilHart23/following{/other_user}",
        "gists_url": "https://api.github.com/users/PhilHart23/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/PhilHart23/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/PhilHart23/subscriptions",
        "organizations_url": "https://api.github.com/users/PhilHart23/orgs",
        "repos_url": "https://api.github.com/users/PhilHart23/repos",
        "events_url": "https://api.github.com/users/PhilHart23/events{/privacy}",
        "received_events_url": "https://api.github.com/users/PhilHart23/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "christopherc1331",
        "id": 49927848,
        "node_id": "MDQ6VXNlcjQ5OTI3ODQ4",
        "avatar_url": "https://avatars3.githubusercontent.com/u/49927848?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/christopherc1331",
        "html_url": "https://github.com/christopherc1331",
        "followers_url": "https://api.github.com/users/christopherc1331/followers",
        "following_url": "https://api.github.com/users/christopherc1331/following{/other_user}",
        "gists_url": "https://api.github.com/users/christopherc1331/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/christopherc1331/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/christopherc1331/subscriptions",
        "organizations_url": "https://api.github.com/users/christopherc1331/orgs",
        "repos_url": "https://api.github.com/users/christopherc1331/repos",
        "events_url": "https://api.github.com/users/christopherc1331/events{/privacy}",
        "received_events_url": "https://api.github.com/users/christopherc1331/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "bmoir23",
        "id": 48401267,
        "node_id": "MDQ6VXNlcjQ4NDAxMjY3",
        "avatar_url": "https://avatars2.githubusercontent.com/u/48401267?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/bmoir23",
        "html_url": "https://github.com/bmoir23",
        "followers_url": "https://api.github.com/users/bmoir23/followers",
        "following_url": "https://api.github.com/users/bmoir23/following{/other_user}",
        "gists_url": "https://api.github.com/users/bmoir23/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/bmoir23/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bmoir23/subscriptions",
        "organizations_url": "https://api.github.com/users/bmoir23/orgs",
        "repos_url": "https://api.github.com/users/bmoir23/repos",
        "events_url": "https://api.github.com/users/bmoir23/events{/privacy}",
        "received_events_url": "https://api.github.com/users/bmoir23/received_events",
        "type": "User",
        "site_admin": false
    },]
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user:dummyUser,
    }
  }

  // fetchUserData = (username) => {
  //   axios.get(`https://api.github.com/users/${username}`)
  //   .then(res => {
  //     // console.log(res.data)
  //     this.setState({
  //       user:res.data
  //     })
  //     return res.data.followers_url
  //   })
  //   .then(followerURL => {
  //     // console.log(followerURL)
  //     axios.get(followerURL)
  //     .then(res => {
  //       // console.log(res.data)
  //       this.setState({
  //         user:{...this.state.user,
  //         follower_data:res.data}
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })

  // }

  // componentDidMount() {
  //   this.fetchUserData('xiongjoh')
  // }

  render() {
    return (
      <div className="main container">
        <UserCard userData={this.state.user}/>
      </div>
    )
  }
}

export default App;


// <h2>Name: {this.state.user.name}</h2>
// <h4>Follower Names: </h4>
// <p>
//   {Array.isArray(this.state.user.follower_data) 
//     && this.state.user.follower_data.map(follower => follower.login).join(', ')}
// </p>