import React from 'react'
import Nav from 'react-bootstrap/Navbar'

export default class Navbar extends React.Component {
    render() {
        return (
            <Nav bg="dark" expand="lg">
                <Nav bg="light" expand="lg">
                <Nav.Brand href="#home">React-Bootstrap</Nav.Brand>
                <Nav.Toggle aria-controls="basic-navbar-nav" />
                <Nav.Collapse id="basic-navbar-nav"></Nav.Collapse>
            </Nav>
            <div>
                <a href="#posts">Posts</a>
                <a href="#about">About</a>
            </div>
        )
    }
}