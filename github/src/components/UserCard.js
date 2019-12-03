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


// config: {url: "https://api.github.com/users/wsu718", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
// data: {login: "wsu718", id: 51175, node_id: "MDQ6VXNlcjUxMTc1", avatar_url: "https://avatars3.githubusercontent.com/u/51175?v=4", gravatar_id: "", …}
// headers: {cache-control: "public, max-age=60, s-maxage=60", content-type: "application/json; charset=utf-8", etag: "W/"b561ddede84832e0e9fd2a4653cff19a"", last-modified: "Tue, 03 Dec 2019 20:31:16 GMT", x-github-media-type: "github.v3", …}
// request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
// status: 200
// statusText: "OK"
// __proto__: Object