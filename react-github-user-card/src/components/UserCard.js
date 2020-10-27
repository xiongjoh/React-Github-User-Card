import React from 'react'

class UserCard extends React.Component {

    render() {
        return (
            <div>
                <h2>Name: {this.props.userData.name}</h2>
                <h4>Follower Names: </h4>
                <p>
                {Array.isArray(this.props.userData.follower_data) 
                    && this.props.userData.follower_data.map(follower => follower.login).join(', ')}
                </p>
            </div>
        )
    }
}

export default UserCard