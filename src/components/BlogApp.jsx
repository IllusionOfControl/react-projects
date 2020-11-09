import React from 'react'
import PostsList from './PostsList'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
//import Navbar from './Navbar'

export default class BlogApp extends React.Component {
    render() {
        return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#posts">BlogApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#posts">Posts</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row>
                    <Col />
                    <Col xs={8}>
                        <PostsList />
                    </Col>
                    <Col />
                </Row>
            </Container>
        </>
        )
    }
}