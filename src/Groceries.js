import { useState } from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ShoppingList from './ShoppingList'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function Groceries() {
  const [selected, setSelected] = useState(0)
  const [isShowing, setIsShowing] = useState(false)
  const [groceryList, setGroceryList] = useState([
    {name: 'Egg', price: 10, quantity: 10, image: "/img_415179.png"},
    {name: 'Carrot', price: 8, quantity: 10, image: "/img_415179.png"},
    {name: 'Lemon', price: 2, quantity: 10, image: "/img_415179.png"},
  ])

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function showDetail({target}){
    setSelected(target.getAttribute('index'))
  }

  function showForm(){
    setIsShowing(true)
  }

  function createItem(event){
    event.preventDefault()
    event.target.checkValidity()
    event.target.reset()
    setIsShowing(false)
    setGroceryList([...groceryList,{...inputs,price:parseInt(inputs.price)}])
  }


  return (
    <Container className="mt-4">
      <Row>
        <ShoppingList 
          groceryList={groceryList} 
          clickHandler={showDetail}>
        </ShoppingList>
        <Col xs="4">
          <Card bg="success" text="light">
            <Card.Body>
              <Card.Title>
                Item detail
              </Card.Title>
            </Card.Body>
            <ListGroup className="overflow-auto" style={{"maxHeight":"50vh"}}>
              <ListGroup.Item 
                className="d-flex justify-content-between align-items-start">
              { groceryList[selected]?.name }
              </ListGroup.Item>
              <ListGroup.Item 
                className="d-flex justify-content-between align-items-start">
              ${ groceryList[selected]?.price.toFixed(2) }
              </ListGroup.Item>
              <ListGroup.Item 
                className="d-flex justify-content-between align-items-start">
                Quantity: { groceryList[selected]?.quantity }
              </ListGroup.Item>
              <ListGroup.Item 
                className="d-flex justify-content-between align-items-start">
              <Image className="w-100" src={groceryList[selected]?.image} />
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Button variant="success" className="mt-3 w-100" onClick={showForm}>Add new item</Button>
        </Col>
        <Col xs="4" className={isShowing?"":"d-none"}>
          <Card bg="danger" text="light">
            <Card.Body>
              <Card.Title>
                Item detail
              </Card.Title>
            </Card.Body>
            <ListGroup className="overflow-auto" style={{"maxHeight":"50vh"}}>
              <form onSubmit={createItem}>
                <ListGroup.Item 
                  className="d-flex justify-content-between align-items-start">
                  <strong>Name:</strong> <input name="name" onChange={handleChange} type="text" className="w-100 ms-2" required/>
                </ListGroup.Item>
                <ListGroup.Item 
                  className="d-flex justify-content-between align-items-start">
                  <strong>Price:</strong> <input name="price" onChange={handleChange} type="number" min="0" className="w-100 ms-2" required/>
                </ListGroup.Item>
                <ListGroup.Item 
                  className="d-flex justify-content-between align-items-start">
                  <strong>Quantity:</strong> <input name="quantity" onChange={handleChange} type="number" min="0" className="w-100 ms-2" required/>
                </ListGroup.Item>
                <ListGroup.Item 
                  className="d-flex justify-content-between align-items-start">
                  <strong>Image URL:</strong> <input name="image" onChange={handleChange} type="url" className="w-100 ms-2" required/>
                </ListGroup.Item>
                <ListGroup.Item 
                  className="d-flex justify-content-between align-items-start">
                  <Button type="submit" variant="danger" className="w-100">Add</Button>
                </ListGroup.Item>
              </form>
            </ListGroup>

          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Groceries;
