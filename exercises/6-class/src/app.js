import React from 'react'
import Header from './components/header'
import UserForm from './components/user-form'

class App extends React.Component{
    render(){
        return <div>
            <Header />
            <UserForm />
        </div>      
    }
}

export default App
