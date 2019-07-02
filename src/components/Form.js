import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      picture: '',
      description: '',
      liked: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleCreatePic(this.state)
    this.clearForm()
  }

  clearForm(){
    this.setState({
      name: '',
      picture: '',
      description: ''
    })
  }

  render() {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
      <h2>Create New Post</h2>
        <form>
          <input id="name" type='text' value={this.state.name} onChange={this.handleChange} placeholder="Username"></input>
          <input id="picture" type='text' value={this.state.picture} onChange={this.handleChange} placeholder="Photo"></input>
          <input id="description" type='text' value={this.state.description} onChange={this.handleChange} placeholder="description"></input>
          <button type="submit" className="submit-button">Post</button>
        </form>
      </div>
    )
  }
}

export default Form;
