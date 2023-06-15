import ListGroup from 'react-bootstrap/ListGroup';
import Grocery from './Grocery'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function ShoppingList({ groceryList, clickHandler }) {
  function insertGroceries(g, i){
    return (
      <Grocery 
        key={i} 
        index={i} 
        disabled={g.quantity?false:true} 
        onClick={clickHandler} 
        name={g.name} price={g.price} 
        quantity={g.quantity} 
        image={g.image}/>
    )
  }

  return (
    <Col>
      <Card bg="primary" text="light">
        <Card.Body>
          <Card.Title>
            Shopping List
          </Card.Title>
        </Card.Body>
        <ListGroup className="overflow-auto" style={{"max-height":"25vh"}}>
          { groceryList.map(insertGroceries) }
        </ListGroup>
      </Card>
    </Col>
  );
}

export default ShoppingList;
