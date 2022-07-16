import Countdown from './Countdown'

const date = new Date('September 7, 2022 00:00:00');

const App = () => {
  return (
    <div className="App">
      <main>
        <section className='container'>
          <Countdown date={date}/>
        </section>
      </main>
    </div>
  );
}

export default App;
