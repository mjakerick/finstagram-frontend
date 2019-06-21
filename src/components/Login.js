import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginUsername: '',
      loginPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleCreateUser({
      username: this.state.username,
      password: this.state.password
    })
    this.setState({
      username: '',
      password: ''
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleLoginSubmit(event) {
    event.preventDefault()
    let loginParams = {
      username: this.state.loginUsername,
      password: this.state.loginPassword
    }
    this.setState({
      loginUsername: '',
      loginPassword: ''
    })
    this.props.handleUserLogin(loginParams)
  }

  render() {
    return (
      <div className="user-form">
        <h2>Create An Account</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Username" onChange={this.handleChange} value={this.state.username} id="username"></input>
          <input type="text" placeholder="Password" onChange={this.handleChange} value={this.state.password} id="password"></input>
          <button className="button" type="submit">Create</button>
        </form>
        <h2>Login</h2>
        <form onSubmit={this.handleLoginSubmit}>
          <input type="text" placeholder="Username" onChange={this.handleChange} value={this.loginUsername} id="login-username"></input>
          <input type="text" placeholder="Password" onChange={this.handleChange} value={this.loginPassword} id="login-password"></input>
          <button className="button" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
