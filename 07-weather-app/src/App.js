import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage'
import React from 'react'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
          
        <MainPage/>
      </div>
    );
  }
}

export default App;
