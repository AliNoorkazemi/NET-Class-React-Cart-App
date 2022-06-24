import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useDispatch } from "react-redux";
import { add } from "../Store/slices/cart";
import {Link} from 'react-router-dom';

function Product(props) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={props.product.img} />
      <Card.Body>
        <Link
          to={`/productdetails/${props.product.id}`}
          style={{ textDecoration: "none" }}
        >
          {props.product.title}
        </Link>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>R$ {props.product.price}</ListGroupItem>
        <ListGroupItem>{props.product.size}</ListGroupItem>
      </ListGroup>
      <Button variant="primary" onClick={() => dispatch(add(props.product))}>
        Add to Cart
      </Button>
    </Card>
  );
}

export default Product;
