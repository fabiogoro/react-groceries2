import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'react-bootstrap/Badge'

function Grocery({name, price, quantity, image, index, disabled, onClick}) {
  return (
    <ListGroup.Item 
      className="d-flex justify-content-between align-items-start"
      index={index} 
      onClick={onClick}
      text="danger">
      <div className={`ms-2 me-auto ${quantity?null:"text-danger"}`}>
        <div className="fw-bold">{name} ${price.toFixed(2)}</div>
      </div>
    </ListGroup.Item>
  );
}

export default Grocery;
