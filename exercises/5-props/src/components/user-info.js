import React from 'react'

const UserInfo = props =>
  <div className="section user-info">
    <img className="avatar" src={props.data.avatar} />
    <a className="name" href={props.data.url}>
      {props.data.name}
    </a>
    <div className="description">
     {props.data.description}
    </div>
  </div>

export default UserInfo
