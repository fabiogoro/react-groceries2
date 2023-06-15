import ListGroup from 'react-bootstrap/ListGroup'
import Grocery from './Grocery'
import Card from 'react-bootstrap/Card'

function History({ history }) {
  return (
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
  );
}

export default History;
