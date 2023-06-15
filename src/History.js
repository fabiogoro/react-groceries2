import ListGroup from 'react-bootstrap/ListGroup'
import Grocery from './Grocery'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function History({ history }) {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                History
              </Card.Title>
              <Card.Text>
                { history.length?null:'History is empty. Place some order to see it on history.' }
              </Card.Text>
            </Card.Body>
            <ListGroup>
              { history.map((h, i)=><ListGroup.Item key={i}>{h.date}: ${h.total.toFixed(2)} {h.items}</ListGroup.Item>) }
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
