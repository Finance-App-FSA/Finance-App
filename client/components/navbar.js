import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      company: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            name=""
            value=""
            placeholder="Company Name"
          />
        </div>
      </div>
    )
  }
}
