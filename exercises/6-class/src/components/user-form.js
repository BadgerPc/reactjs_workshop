import React from 'react'

class UserForm extends React.Component{
    render() {
        return <div className="user-form">
            <img src="logo.png" className="big logo" />
            <input type="text" placeholder="github username" />
            <button disabled>See profile</button>
        </div>
    }
}
export default UserForm
