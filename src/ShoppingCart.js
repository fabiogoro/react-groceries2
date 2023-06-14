import ListGroup from 'react-bootstrap/ListGroup'
import Grocery from './Grocery'

function ShoppingCart({ groceryList }) {
  function insertGroceries(g, i){
    if(g.inCart>0){ 
      return (
        <Grocery 
          key={i} 
          name={g.name} 
          price={g.price*g.inCart} 
          quantity={g.inCart}
        />
    )}
  }
  return (
    <ListGroup>
      { groceryList.map(insertGroceries) }
    </ListGroup>
  );
}

export default ShoppingCart;
