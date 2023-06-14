import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShoppingList from './ShoppingList'
import ShoppingCart from './ShoppingCart'
import Total from './Total'
import Receipt from './Receipt'

function Groceries() {
  const groceryList = [
    {name: 'banana', price: 10, quantity: 10, image: 'image.jpg', inCart: 2, total: 20},
    {name: 'bread', price: 10, quantity: 10, image: 'image.jpg', inCart: 0, total: 0},
    {name: 'apple', price: 10, quantity: 10, image: 'image.jpg', inCart: 2, total: 20},
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
      <Row className="mt-5">
        <Col>
          <Total groceryList={groceryList}></Total>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Receipt groceryList={groceryList}></Receipt>
        </Col>
      </Row>
    </Container>
  );
}

export default Groceries;
