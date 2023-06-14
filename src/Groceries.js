import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShoppingList from './ShoppingList'
import ShoppingCart from './ShoppingCart'
import Total from './Total'
import Receipt from './Receipt'
import { faEgg, faCarrot, faLemon } from '@fortawesome/free-solid-svg-icons'

function Groceries() {
  const [groceryList, setGroceryList] = useState([
    {name: 'Egg', price: 10, quantity: 10, image: faEgg, inCart: 0, total: 0},
    {name: 'Carrot', price: 8, quantity: 10, image: faCarrot, inCart: 0, total: 0},
    {name: 'Lemon', price: 2, quantity: 10, image: faLemon, inCart: 0, total: 0},
  ])

  function addItemHandler(e){
    const newGroceryList = [...groceryList]
    const item = newGroceryList[e.target.getAttribute("index")]
    item.inCart += 1
    item.quantity -= 1
    item.total = item.inCart*item.price
    setGroceryList(newGroceryList)
  }

  function removeItemHandler(e){
    const newGroceryList = [...groceryList]
    newGroceryList[e.target.getAttribute("index")].inCart -= 1
    newGroceryList[e.target.getAttribute("index")].quantity += 1
    setGroceryList(newGroceryList)
  }

  function placeOrderHandler(e){
    setIsShowingReceipt(true)
  }

  const [isShowingReceipt, setIsShowingReceipt] = useState(false)

  if(!isShowingReceipt){
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
            <Total groceryList={groceryList} clickHandler={placeOrderHandler}></Total>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="mt-4">
        <Row className="mt-5">
          <Col>
            <Receipt groceryList={groceryList}></Receipt>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Groceries;
