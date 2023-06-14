import ListGroup from 'react-bootstrap/ListGroup';
import Grocery from './Grocery'

function ShoppingList() {
  return (
    <ListGroup>
      <Grocery name="banana" price="10" quantity="10" image="image.jpg"></Grocery>
    </ListGroup>
  );
}

export default ShoppingList;
