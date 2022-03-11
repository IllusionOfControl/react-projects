import Header from './components/header';
import MainPage from './pages/mainPage/mainPage'
import React from 'react'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
          
        <MainPage></MainPage>
      </div>
    );
  }
}

export default App;
