import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Menu from './Menu';
import {Navbar, Categories} from './components'

import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart/>} />
      {/* <Route path='cocktail/:id' element={<SingleCocktail />} /> */}
      {/* <Route path='*' element={<Error />} /> */}
    </Routes>
  </Router>
  )
}

export default App;
