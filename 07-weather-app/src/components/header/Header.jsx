import { Container, Navbar } from 'react-bulma-components'
import 'bulma/css/bulma.min.css';
import React from 'react'

const Header = () => {
  return (
    <Navbar color="danger">
      <Container>
        <Navbar.Container align='left'>
          <Navbar.Brand>
            <Navbar.Item href='#'>
              Weather app
            </Navbar.Item>
          </Navbar.Brand>
        </Navbar.Container>
      </Container>
    </Navbar>
  )
};

export default Header;
