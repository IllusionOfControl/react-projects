import { Button } from 'react-bulma-components';
import { Panel } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'
import { useGlobalContext } from '../../context'

const SearchHistory = () => {
  const { search_history, clearHistory, searchCity } = useGlobalContext();

  return (
    <Panel color='info'>
      <Panel.Header>
        Search history
      </Panel.Header>

      {search_history.map((item, index) => {
        return (
          <Panel.Block active renderAs="a" onClick={() => searchCity(item)}>
            {item}
          </Panel.Block>
        )
      })}
      <Panel.Block>
        <Button fullwidth outlined color='danger' onClick={clearHistory}>
          Clear History
        </Button>
      </Panel.Block>
    </Panel>
  )
};

export default SearchHistory;