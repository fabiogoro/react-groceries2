import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShoppingList from './ShoppingList'
import ShoppingCart from './ShoppingCart'

function Groceries() {
  const groceryList = [
    {name: 'banana', price: '10', quantity: '10', image: 'image.jpg', inCart: '2'},
    {name: 'bread', price: '10', quantity: '10', image: 'image.jpg', inCart: '0'},
    {name: 'apple', price: '10', quantity: '10', image: 'image.jpg', inCart: '0'},
  ]
  return (
    <Container>
      <h1>Groceries</h1>
      <Row>
        <Col>
          <ShoppingList groceryList={groceryList}></ShoppingList>
        </Col>
        <Col>
          <ShoppingCart groceryList={groceryList}></ShoppingCart>
        </Col>
      </Row>
    </Container>
  );
}

export default Groceries;
