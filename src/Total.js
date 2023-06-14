import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Total({ groceryList, clickHandler }) {
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
          Price: ${ total.total.toFixed(2) } <br/>
          Items: { total.inCart }
        </Card.Text>
        <Button variant="primary" onClick={clickHandler} disabled={total.inCart==0}>Place order</Button>
      </Card.Body>
    </Card>
  );
}

export default Total;
