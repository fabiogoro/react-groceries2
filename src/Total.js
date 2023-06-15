import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Total({ groceryList, clickHandler, total }) {
  return (
    <Row className="mt-5">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              Total
            </Card.Title>
            <Card.Text>
              Price: ${ total.total.toFixed(2) } <br/>
              Items: { total.inCart }
            </Card.Text>
            <Button variant="primary" onClick={clickHandler} disabled={total.inCart==0}>Place order</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Total;
