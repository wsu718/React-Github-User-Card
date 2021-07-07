import React from 'react';

const UserCard = props => {
    return (
        <div className='userCard'>
            <img width="200" src={props.gitHubUserContent.avatar_url} alt={props.gitHubUserContent.name} />
            <p>Name: {props.gitHubUserContent.name}</p>
            <p>Bio: {props.gitHubUserContent.bio}</p>
            <p>Followers: {props.gitHubUserContent.followers}</p>
            <p>Following: {props.gitHubUserContent.following}</p>
            <p>Location: {props.gitHubUserContent.location}</p>
            <p>Public repos: {props.gitHubUserContent.public_repos}</p>
        </div>
    )
}

export default UserCard;