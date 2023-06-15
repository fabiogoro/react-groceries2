import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Grocery from './Grocery'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Receipt({ groceryList, total }) {
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
            <ListGroup>
              { groceryList.map(insertGroceries) }
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Receipt;
