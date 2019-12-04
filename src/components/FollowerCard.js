import React from 'react';

const FollowerCard = props => {
    return (
        <div className='followerCard'>
            <img width="100" src={props.follower.avatar_url} alt={props.follower.login}/>
            <p>{props.follower.login}</p>
        </div>
    )
}

export default FollowerCard;