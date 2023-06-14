import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'react-bootstrap/Badge'

function Grocery({name, price, quantity, image, index, disabled, onClick}) {
  return (
    <ListGroup.Item 
      className="d-flex justify-content-between align-items-start"
      action={ onClick!=undefined } 
      disabled={disabled} 
      index={index} 
      onClick={onClick}> 
      <div className="ms-2 me-auto">
          <div className="fw-bold"><FontAwesomeIcon icon={image} /> {name}</div>
          ${price.toFixed(2)}
      </div>
      <Badge bg="dark" pill>
          {quantity}
      </Badge>
    </ListGroup.Item>
  );
}

export default Grocery;
