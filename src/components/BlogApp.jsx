import React from 'react'
import PostList from './PostList'
import PostEdit from './PostEdit'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import BLOG_POSTS from '../data'

export default class BlogApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: BLOG_POSTS
        }
    }

    onPostAdd(newPost) {
        BLOG_POSTS.push(newPost)
        console.log(BLOG_POSTS.length.toString())
    }

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
                        <PostEdit onPostAdd={this.onPostAdd} />
                        <PostList posts={this.state.posts} />
                    </Col>
                    <Col />
                </Row>
            </Container>
        </>
        )
    }
}