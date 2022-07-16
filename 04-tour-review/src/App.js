import React, {useEffect, useState} from 'react';
import Loading from './Loading';
import ToursSlider from './ToursSlider';

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try {
        const response = await fetch(url);
        const tours = await response.json();
        setLoading(false);
        setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
}, []);

  if (loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
  <main>
    <section className='container'>
      <div className='title'>
        <h2>Tours review</h2>
        <div className="underline"></div>
      </div>
      <ToursSlider tours={tours}/>
    </section>
  </main>
  )
}

export default App;
