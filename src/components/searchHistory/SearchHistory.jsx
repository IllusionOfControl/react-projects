import { Button } from 'react-bulma-components';
import { Panel } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'


class SearchHistory extends React.Component {
    render() {
        return (
            <Panel color='info'>
                <Panel.Header>
                    Search history
                </Panel.Header>
            <Panel.Block active renderAs="a">
                New york
            </Panel.Block>
            <Panel.Block active renderAs="a">
                London
            </Panel.Block>
            <Panel.Block active renderAs="a">
                Moskow
            </Panel.Block>
            <Panel.Block active renderAs="a">
                Talin
            </Panel.Block>
            <Panel.Block>
                <Button fullwidth outlined color='danger'>
                    Clear History
                </Button>
            </Panel.Block>
            </Panel>
        )
    }
}

export default SearchHistory;