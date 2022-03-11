import { Form, Button } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'


class SearchBox extends React.Component {
    render() {
        return (
            <Form.Field kind='group'>
                <Form.Control fullwidth>
                    <Form.Input type="text" placeholder="Find the city..."/>
                </Form.Control>
                <Form.Control>
                    <Button>
                        Search
                    </Button>
                </Form.Control>
            </Form.Field>
        )
    }
}

export default { SearchBox };