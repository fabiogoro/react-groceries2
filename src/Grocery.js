import ListGroup from 'react-bootstrap/ListGroup';

function Grocery({name, price, quantity, image}) {
  return (
    <ListGroup.Item>{image?image:null} {name} ({price}) - {quantity}</ListGroup.Item>
  );
}

export default Grocery;
