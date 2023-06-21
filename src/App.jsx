import "./App.css";
import Form1to2 from "./Form1to2";
import Form3 from "./Form3";
import Form4to6 from "./Form4to6";
import { Container, Row, Col,Button } from "reactstrap";
import { useState  } from "react";
import Form7 from "./Form7";
// import { FormProvider } from './FormContext';

function App() {
  const [formValues, setFormValues] = useState({});
  const handleFormSubmit = (values) => {
    // Update the form values state
    setFormValues((prevFormValues) => ({ ...prevFormValues, ...values }));
    console.log({...formValues,"ace":"bdf"});
    console.log(formValues);
  };

  const handleSubmitButton = () => {
  // Perform any additional actions using the form values
  console.log('All form values:', formValues);
  // Make an API request, update the UI, etc.    
};

  return (
    <Container>
       {/* <FormProvider> */}
       <Row>
        <Col xs="12" xxl="6">
          <Form1to2/>
        </Col>
        <Col xs="12" xxl="6">
          <Form3 />
        </Col>
        <Col xs="12" md="6">
          <Form4to6 driver={"A"} submitHandler={handleFormSubmit}/>
        </Col>
        <Col xs="12" md="6">
          <Form4to6 driver={"B"} submitHandler={handleFormSubmit}/>
        </Col>
        <Col>
          <Form7/>
        </Col>
      </Row>
       {/* </FormProvider> */}
      <Button type="button" onClick={handleSubmitButton}>SAVE</Button>
    </Container>
  );
}

export default App;
