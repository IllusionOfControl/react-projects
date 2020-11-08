import './App.css';


function ListItem(props) {
  const item = props.item
  return(
    <li id={item.id}>
      <p>name: {item.name}</p>
      <p>price: {item.price}</p>
    </li>
  )
}


function App(props) {
  const items = props.items
  const listItems = items.map((item) =>
    <ListItem key={item.id} item={item} />
  )
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default App;
