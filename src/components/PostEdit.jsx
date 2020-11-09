import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default class Navbar extends React.Component {
    publicatePost() {}
    render() {
        return (
            <div className="pt-3 pb-3">
                <h3>Say anything now!</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
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