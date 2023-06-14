import ListGroup from 'react-bootstrap/ListGroup';
import Grocery from './Grocery'

function ShoppingList({ groceryList }) {
  return (
    <ListGroup>
      { groceryList.map((g, i)=>(<Grocery key={i} name={g.name} price={g.price} quantity={g.quantity} image={g.image}></Grocery>)) }
    </ListGroup>
  );
}

export default ShoppingList;
