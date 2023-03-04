import React, {useState} from 'react';
import BirthdayList from './BirthdayList';
import data from './data'


const App = () => {
  const [persons, ] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{persons.length} birthdays today</h3>
        <BirthdayList persons={persons}/>
      </section>
    </main>
  )
}

export default App;
