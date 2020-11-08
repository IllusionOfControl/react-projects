import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function ListItem(props) {
  const key = props.key
  const name = props.name;
  const price = props.price
  return(
    <li key={key}>
      <p>name: {name}</p>
      <p>price: {price}</p>
    </li>
  )
}

function App(props) {
  const items = props.items
  const listItems = items.map((item) =>
    <ListItem key={item.id.toString()} name={item.name} price={item.price} />
  )
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default App;
