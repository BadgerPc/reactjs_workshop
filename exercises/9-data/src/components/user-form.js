import React from 'react'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    let disabled = !this.props.initialValue;
    this.state = { disabled: disabled, value: this.props.initialValue }
  }

  onChange(event) {
    let disabled = true
    if (event.target.value) disabled = false
    this.setState({ disabled: disabled, value : event.target.value })
  }

  onClick(event){
    this.props.onClick(this.state.value);
  }

  render() {
    return (
      <div className="user-form">
        <input
          defaultValue={this.props.initialValue}
          onChange={this.onChange.bind(this)}
          type="text"
          placeholder="github username"
        />
        <button disabled={this.state.disabled} onClick={this.onClick.bind(this)}>See profile</button>
      </div>
    )
  }
}

export default UserForm
