import ListGroup from 'react-bootstrap/ListGroup';

function Grocery({name, price, quantity, image, index, disabled, onClick}) {
  return (
    <ListGroup.Item disabled={disabled} index={index} onClick={onClick}>{image?image:null} {name} (${price.toFixed(2)}) - {quantity}</ListGroup.Item>
  );
}

export default Grocery;
