import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Total({ groceryList, clickHandler, total }) {
  return (
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
  );
}

export default Total;
