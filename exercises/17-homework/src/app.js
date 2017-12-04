import React from 'react'
import Header from './components/header.js'
import Tasks from './components/tasks.js'
import data from './data.js'

class App extends React.Component {

  render() {
    return <div>
        <Header />
        <Tasks data={data}/>
    </div>
  }
}

export default App
