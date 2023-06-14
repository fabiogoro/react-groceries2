import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Total({ groceryList }) {
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
          Total
        </Card.Title>
        <Card.Text>
          Price: { total.total } <br/>
          Items: { total.inCart }
        </Card.Text>
        <Button variant="primary">Place order</Button>
      </Card.Body>
    </Card>
  );
}

export default Total;
