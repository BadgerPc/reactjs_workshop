import React from 'react'
import Header from './components/header'
import UserInfo from './components/user-info'
import Repositories from './components/repositories'

const App = props =>
  <div>
    <Header />
    <UserInfo data={props.data} />
    <Repositories repos={props.data.repos}/>
  </div>

export default App
