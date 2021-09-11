// Write your JS code here

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    userFirstName: '',
    userLastName: '',
    firstUndefined: '',
    lastUndefined: '',
    stateChange: true,
  }

  getFirstNameFunction = userFirstName => {
    if (userFirstName === '') {
      this.setState({firstUndefined: 'Required'})
      return false
    }
    this.setState({firstUndefined: ''})
    return true
  }

  getSecondNameFunction = userLastName => {
    if (userLastName === '') {
      this.setState({lastUndefined: 'Required'})
      return false
    }
    this.setState({lastUndefined: ''})
    return true
  }

  submitDetails = event => {
    event.preventDefault()
    const {userFirstName, userLastName} = this.state

    const getFirstName = this.getFirstNameFunction(userFirstName)
    const getSecondName = this.getSecondNameFunction(userLastName)

    if (getFirstName && getSecondName) {
      this.setState({stateChange: false, userFirstName: '', userLastName: ''})
    }
  }

  updateName = event => {
    this.setState({userFirstName: event.target.value})
  }

  updateLast = event => {
    this.setState({userLastName: event.target.value})
  }

  anotherResponse = () => {
    this.setState({stateChange: true})
  }

  successComponent = () => (
    <div className="form-container add-form">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="submit">Submitted Successfully</p>
      <button
        type="button"
        className="button button-two"
        onClick={this.anotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  formComponent = () => {
    const {firstUndefined, lastUndefined} = this.state
    return (
      <form className="form-container" onSubmit={this.submitDetails}>
        <div className="input-container">
          <label htmlFor="name" className="name-heading">
            First Name
          </label>
          <br />
          <input
            onBlur={this.updateName}
            type="text"
            placeholder="Full Name"
            id="name"
            className="input-bar"
          />
          <p className="alert"> {firstUndefined}</p>
        </div>
        <div className="input-container">
          <label htmlFor="name" className="name-heading">
            Last Name
          </label>
          <br />
          <input
            onBlur={this.updateLast}
            type="text"
            placeholder="Last Name"
            id="name"
            className="input-bar"
          />
          <p className="alert"> {lastUndefined}</p>
        </div>
        <button type="submit" className="button">
          submit
        </button>
      </form>
    )
  }

  render() {
    const {stateChange} = this.state
    return (
      <div className="bg-container">
        <h1 className="registar">Registration</h1>
        {stateChange ? this.formComponent() : this.successComponent()}
      </div>
    )
  }
}

export default RegistrationForm
