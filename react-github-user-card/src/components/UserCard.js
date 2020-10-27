import React from 'react'
import styled from 'styled-components'

const StyledPara = styled.p`
max-width: 30rem;
`

class UserCard extends React.Component {

    render() {
        return (
            <div>
                <h2>Name: {this.props.userData.name}</h2>
                <h4>Follower Names: </h4>
                <StyledPara>
                {Array.isArray(this.props.userData.follower_data) 
                    && this.props.userData.follower_data.map(follower => follower.login).join(', ')}
                </StyledPara>
            </div>
        )
    }
}

export default UserCard