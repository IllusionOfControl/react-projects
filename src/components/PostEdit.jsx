import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BLOG_POSTS from '../data'

export default class PostEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formTitle: "",
            formContent: ""
        }

        this.handleInputTitle = this.handleInputTitle.bind(this)
        this.handleInputContent = this.handleInputContent.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onSubmit(event) {
        event.preventDefault()

        var newPost = {
            id: BLOG_POSTS.length.toString(),
            title: this.state.formTitle,
            content: this.state.formContent 
        }
        
        this.props.onPostAdd(newPost)
    }

    handleInputTitle(event) {
        this.setState({formTitle: event.target.value})
    }

    handleInputContent(event) {
        this.setState({formContent: event.target.value})
    }

    render() {
        return (
            <div className="pt-3 pb-3">
                <h3>Say anything now!</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formTitle" onChange={this.handleInputTitle}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formContent" onChange={this.handleInputContent}>
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Publicate
                    </Button>
                </Form>
                <hr></hr>
            </div>
        )
    }
}