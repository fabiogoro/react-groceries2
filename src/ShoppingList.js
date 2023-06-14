import ListGroup from 'react-bootstrap/ListGroup';
import Grocery from './Grocery'

function ShoppingList({ groceryList, clickHandler }) {
  function insertGroceries(g, i){
    return (
      <Grocery 
        key={i} 
        index={i} 
        disabled={g.quantity?false:true} 
        onClick={clickHandler} 
        name={g.name} price={g.price} 
        quantity={g.quantity} 
        image={g.image}/>
    )
  }

  return (
    <ListGroup>
      { groceryList.map(insertGroceries) }
    </ListGroup>
  );
}

export default ShoppingList;
