import "./App.css";
import Form1to2 from "./Form1to2";
import Form3 from "./Form3";
import Form from "./Form4to6";
import { Container, Row, Col } from "reactstrap";
import Form7 from "./Form7";

function App() {
  return (
    <Container>
      <Row>
        <Col xs="12" xxl="6">
          <Form1to2 />
        </Col>
        <Col xs="12" xxl="6">
          <Form3 />
        </Col>
        <Col xs="12" md="6">
          <Form driver={"A"} />
        </Col>
        <Col xs="12" md="6">
          <Form driver={"B"} />
        </Col>
        <Col>
          <Form7/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
