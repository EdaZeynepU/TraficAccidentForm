import './App.css'
import Form3 from './Form3';
import Form from "./Form4to6";
import { Container,Row,Col } from "reactstrap";

function App() {

  return (
    <Container>
      <Row>
        <Col xs="12">
        <Form3/>
        </Col>
        <Col xs="12" md="6">
          <h1>Driver A</h1>
<Form driver={"A"}/>
          </Col>
        <Col xs="12" md="6">
        <h1>Driver B</h1>

        <Form driver={"B"}/>

          </Col>
      </Row>
    </Container>
  )
}

export default App
