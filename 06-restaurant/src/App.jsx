import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {Suspense} from 'react';
import { Navbar } from './components'
import { AboutPageAsync, CartPageAsync, HomePageAsync } from './pages';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path='/' element={<HomePageAsync/>}/>
          <Route path='/about' element={<AboutPageAsync/>}/>
          <Route path='/cart' element={<CartPageAsync/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
