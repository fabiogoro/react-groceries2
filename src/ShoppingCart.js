import ListGroup from 'react-bootstrap/ListGroup'
import Grocery from './Grocery'

function ShoppingCart({ groceryList, clickHandler }) {
  function insertGroceries(g, i){
    if(g.inCart>0){ 
      return (
        <Grocery 
          key={i} 
          name={g.name} 
          price={g.total} 
          quantity={g.inCart}
          index={i}
          onClick={clickHandler}
        />
      )
    }
  }

  return (
    <ListGroup>
      { groceryList.map(insertGroceries) }
    </ListGroup>
  );
}

export default ShoppingCart;
