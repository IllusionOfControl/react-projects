import { Form, Button } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import React from 'react'
import { useGlobalContext } from '../../context';

const SearchForm = () => {
  const { searchCity } = useGlobalContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCity(document.getElementById('city-input').value);
    document.getElementById('city-input').value = '';
  }

  return (
    <Form.Field kind='group'>
      <Form.Control fullwidth>
        <Form.Input type="text" placeholder="Find the city..." id='city-input' />
      </Form.Control>
      <Form.Control>
        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Form.Control>
    </Form.Field>
  )
};

export default SearchForm;