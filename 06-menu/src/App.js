import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import {Navbar} from './components'
import { Home, About, Cart } from './pages';

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
