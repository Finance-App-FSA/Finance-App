import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavLink from 'react-router-dom'

export default class NavigationBar extends Component {
  constructor() {
    super()
    this.state = {
      company: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({company: event.target.value})
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Order History</Nav.Link>
            <Nav.Link href="#features">Account</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Company Search"
              className="mr-sm-2"
            />

            <Button
              onSubmit={this.handleChange}
              value={this.state.company}
              variant="outline-info"
            >
              Search
            </Button>
          </Form>
        </Navbar>
        <br />
      </div>
    )
  }
}
