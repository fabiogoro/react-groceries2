import Container from 'react-bootstrap/Container';
import ShoppingList from './ShoppingList'

function Groceries() {
  const groceryList = [
    {name: 'banana', price: '10', quantity: '10', image: 'image.jpg'},
    {name: 'bread', price: '10', quantity: '10', image: 'image.jpg'},
    {name: 'apple', price: '10', quantity: '10', image: 'image.jpg'},
  ]
  return (
    <Container>
      <h1>Groceries</h1>
      <ShoppingList groceryList={groceryList}></ShoppingList>
    </Container>
  );
}

export default Groceries;
