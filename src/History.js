import Table from 'react-bootstrap/Table'
import Grocery from './Grocery'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function History({ history }) {
  function eraseHistory(){
    localStorage.removeItem("history")
    window.location.reload()
  }
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
                { history.length?(
                  <Button variant="danger" onClick={eraseHistory} disabled={history.length==0}>Erase history</Button>):
                    'History is empty. Place some order to see it on history.' }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="overflow-auto" style={{"max-height":"50vh"}}>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Total Price</th>
                <th># of Items</th>
              </tr>
            </thead>
            <tbody>
              { history.map((h, i)=><tr onClick={()=>{window.location.href=`receipt/${h.id}`}}><td>{h.date}</td><td>${h.total.toFixed(2)}</td><td>{h.items}</td></tr>) }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
