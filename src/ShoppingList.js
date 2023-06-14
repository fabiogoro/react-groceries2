import ListGroup from 'react-bootstrap/ListGroup';
import Grocery from './Grocery'

function ShoppingList({ groceryList, clickHandler }) {
  return (
    <ListGroup>
      { groceryList.map((g, i)=>(<Grocery key={i} index={i} disabled={g.quantity?false:true} onClick={clickHandler} name={g.name} price={g.price} quantity={g.quantity} image={g.image}></Grocery>)) }
    </ListGroup>
  );
}

export default ShoppingList;
