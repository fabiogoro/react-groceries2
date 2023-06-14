import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Grocery from './Grocery'

function Receipt({ groceryList }) {
  function insertGroceries(g, i){
    if(g.inCart>0){ 
      return (
        <Grocery 
          key={i} 
          name={g.name} 
          price={g.total} 
          quantity={g.inCart}
        />
    )}
  }
  const total = groceryList.reduce(
    (g1,g2)=>{return {
      total: g1.total+g2.total, 
      inCart: g1.inCart+g2.inCart,
    }
    }
  )
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Your Receipt
        </Card.Title>
        <Card.Text>
          Price: { total.total } <br/>
          Items: { total.inCart }
        </Card.Text>
      </Card.Body>
      <ListGroup>
        { groceryList.map(insertGroceries) }
      </ListGroup>
    </Card>
  );
}

export default Receipt;
