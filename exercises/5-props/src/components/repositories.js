import React from 'react'

const Repo = (props) =>
  <div className="repo">
    <a className="name" href={props.repo.url} title={props.repo.description}>
      {props.repo.name}
    </a>
    <div className="stars">{props.repo.stars}</div>
    <div className="clear" />
  </div>


const Repositories = (props) =>
  <div className="section repositories">

    {
      props.repos.map(obj => {
        return <Repo repo={obj} key={obj.name}/>
      })
    }
    
  </div>

export default Repositories
