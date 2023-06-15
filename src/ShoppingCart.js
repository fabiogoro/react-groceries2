import ListGroup from 'react-bootstrap/ListGroup'
import Grocery from './Grocery'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function ShoppingCart({ groceryList, clickHandler }) {
  const groceriesInCart = []
  for(const i in groceryList){
    const g = groceryList[i]
    if(g.inCart>0){ 
      groceriesInCart.push((
        <Grocery 
          key={i} 
          name={g.name} 
          price={g.total} 
          quantity={g.inCart}
          index={i}
          onClick={clickHandler}
        />
      ))
    }
  }

  return (
    <Col>
      <Card bg="success" text="light">
        <Card.Body>
          <Card.Title>
            Shopping Cart
          </Card.Title>
          <Card.Text>
            { groceriesInCart.length?null:'Cart is empty. Click on items on right to add them to shopping cart.' }
          </Card.Text>
        </Card.Body>
        <ListGroup>
          { groceriesInCart }
        </ListGroup>
      </Card>
    </Col>
  );
}

export default ShoppingCart;
