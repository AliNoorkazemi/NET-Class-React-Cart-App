import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import Notebooks from "./Components/Notebooks";
import SmartPhones from "./Components/SmartPhones";
import Checkout from "./Components/Checkout";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link style ={{textDecoration:"none", color :"whitesmoke", padding : "1rem"}} to="/">AllProducts</Link>
            <Link style ={{textDecoration:"none", color :"whitesmoke", padding : "1rem"}} to="/smartphones">Smartphones</Link>
            <Link style ={{textDecoration:"none", color :"whitesmoke", padding : "1rem"}} to="/notebooks">Notebooks</Link>
          </Nav>
          <Button
            variant="outline-light"
            size="lg"
            onClick={() => navigate("/checkout")}
          >
            Cart
          </Button>
        </Container>
      </Navbar>
      <div style={{ padding: "10rem" }}>
        <Routes>
          <Route path="/" element={<AllProducts />} exact />
          <Route path="/notebooks" element={<Notebooks />} />
          <Route path="/smartphones" element={<SmartPhones />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/productdetails/:product_id"
            element={<ProductDetails />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
