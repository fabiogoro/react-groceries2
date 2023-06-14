import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShoppingList from './ShoppingList'
import ShoppingCart from './ShoppingCart'
import Total from './Total'
import Receipt from './Receipt'

function Groceries() {
  const [groceryList, setGroceryList] = useState([
    {name: 'banana', price: 10, quantity: 10, image: 'image.jpg', inCart: 0, total: 0},
    {name: 'bread', price: 10, quantity: 10, image: 'image.jpg', inCart: 0, total: 0},
    {name: 'apple', price: 10, quantity: 10, image: 'image.jpg', inCart: 0, total: 0},
  ])

  function addItemHandler(e){
    const newGroceryList = [...groceryList]
    newGroceryList[e.target.getAttribute("index")].inCart += 1
    newGroceryList[e.target.getAttribute("index")].quantity -= 1
    setGroceryList(newGroceryList)
  }

  function removeItemHandler(e){
    const newGroceryList = [...groceryList]
    newGroceryList[e.target.getAttribute("index")].inCart -= 1
    newGroceryList[e.target.getAttribute("index")].quantity += 1
    setGroceryList(newGroceryList)
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <ShoppingList groceryList={groceryList} clickHandler={addItemHandler}></ShoppingList>
        </Col>
        <Col>
          <ShoppingCart groceryList={groceryList} clickHandler={removeItemHandler}></ShoppingCart>
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
