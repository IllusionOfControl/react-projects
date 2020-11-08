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

const items = [
  {
    "id": 0,
    "name": "Notebook",
    "price": 12500, 
  },
  {
    "id": 1,
    "name": "Computer",
    "price": 25000, 
  },
  {
    "id": 2,
    "name": "CPU",
    "price": 3000, 
  },
  {
    "id": 3,
    "name": "GPU",
    "price": 9000, 
  },
  {
    "id": 4,
    "name": "Smartphone",
    "price": 32000, 
  }
] 

const listItems = items.map((item) =>
    <li className="item" id={item.id}>
      <p>name: {item.name}</p>
      <p>price: {item.price}</p>
    </li>
)

function App() {
  return (
    <ul className="listItems">
      {listItems}
    </ul>
  );
}

export default App;
