import React from 'react'

const App = () =>
    <div>
        <div className="header">
            <img src="logo.png" className="logo" alt="logo"/>
        </div>

        <div className="user-form">
            <img src="logo.png" className="logo big" alt="logo"/>
            <input type="text" name="username" placeholder="github username" />
            <button>See profile</button>
        </div>
    </div>

export default App
