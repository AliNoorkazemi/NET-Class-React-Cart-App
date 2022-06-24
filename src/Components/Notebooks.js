import Product from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Notebooks() {
  const data = require("../data.json").data;
  return (
    <Row xs={1} md={2} className="g-4">
      {data.filter((product) =>(product.category==="notebook")).map((product) =>(
        <Col key={product.id}>
          <Product product={product}/>
        </Col>
      ))}
    </Row>
  );
}

export default Notebooks;
