import { useDispatch } from "react-redux";
import { remove } from "../Store/slices/cart";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function CheckoutItem(props) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.product.img} />
      <Card.Body>
        <Card.Text>{props.product.title}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>R$ {props.product.price}</ListGroupItem>
      </ListGroup>
      <Button
        variant="danger"
        onClick={() =>
          dispatch(remove({ price: props.product.price, id: props.product.id }))
        }
      >
        Remove
      </Button>
    </Card>
  );
}
