import React, {useEffect, useState} from 'react';
import Loading from './Loading';
import Error from './Error';
import ToursSlider from './ToursSlider';

const url = 'https://course-api.com/react-tours-project'

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error)
      })
  }, [url])

  return {data, error, loading}
}

const App = () => {
  const {data, error, loading} = useFetch(url);

  if (error) {
    console.log(error)
    return <Error/>
  }

  if (loading) return <Loading/>

  if (data.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
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
        <ToursSlider tours={data}/>
      </section>
    </main>
  )
}

export default App;
