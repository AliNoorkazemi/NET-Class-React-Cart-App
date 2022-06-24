import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { add } from "../Store/slices/cart";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = useParams().product_id;
  const product = require("../data.json").data.filter(
    (product) => product.id == id
  )[0];
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Text>{product.title}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>R$ {product.price}</ListGroupItem>
          <ListGroupItem>{product.size}</ListGroupItem>
        </ListGroup>
        <Button variant="success" onClick={() => dispatch(add(product))}>
          Add to Cart
        </Button>
        <Button variant="primary" onClick={handleShow}>
          More Info
        </Button>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{product.detail}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
