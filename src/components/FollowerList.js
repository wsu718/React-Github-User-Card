import React from 'react';
import FollowerCard from './FollowerCard';

const FollowerList = props => {
    return (
    <div className='followers'>
        {props.gitHubFollowers.map(follower => (
            <FollowerCard follower={follower} key={follower.id}/>
        ))}
    </div>
    )
}

export default FollowerList;