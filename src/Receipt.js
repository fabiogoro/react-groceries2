import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Grocery from './Grocery'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLoaderData } from 'react-router-dom'

function Receipt() {
  const id = useLoaderData();
  const saved = localStorage.getItem(id)
  const groceryList = JSON.parse(saved) || []
  const total = groceryList.reduce(
      (g1,g2)=>{return {
        total: g1.total+g2.total,
        inCart: g1.inCart+g2.inCart,
      }})
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
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Your Receipt
              </Card.Title>
              <Card.Text>
                Price: ${ total.total.toFixed(2) } <br/>
                Items: { total.inCart }
              </Card.Text>
            </Card.Body>
            <ListGroup className="overflow-auto" style={{"max-height":"50vh"}}>
              { groceryList.map(insertGroceries) }
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Receipt;
