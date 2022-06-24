import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { checkout } from "../Store/slices/cart";

export default function Checkout(props) {
  const products = useSelector((state) => state.cart.products);
  const total_price = useSelector((state) => state.cart.total_price);
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <Row xs={1} md={2} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <CheckoutItem product={product} />
            </Col>
          ))}
        </Row>
      </Card>
      <Button variant="primary" onClick={() => dispatch(checkout())}>
        Checkout
      </Button>
      <p className="text-right">Total Price : {total_price}</p>
    </>
  );
}
