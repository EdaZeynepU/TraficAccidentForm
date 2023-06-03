// import { useFormik } from "formik";
import {useState} from "react";
import { Form, Input, Button,Badge, ButtonGroup, Row, Col } from "reactstrap";
// Label,Badge, FormGroup,


function Form3() {
    const [witnesses, setWitnesses] = useState(1);
    const [witnessesArray, setWitnessesArray] = useState([]); //stores witnesses values

    const addNewWitness = () => {
      setWitnesses(witnesses + 3);
    };
  
    const handleSubmit = (e) => {
        const updatedWitnessesNameArray = [];
        for (let i = 0; i < e.target.children.length - 1; i++) {
          updatedWitnessesNameArray.push(e.target.children[i].firstChild.firstChild.value);
        }
        setWitnessesArray(updatedWitnessesNameArray);
        console.log(e.target);
        e.preventDefault();
      };
    
    const renderWitnesses = () => {
      const witnessesArray = [];
      for (let i = 0; i < witnesses; i += 3) {
        witnessesArray.push(
          <Row key={i} style={{ marginBottom: "20px" }}>
            <Col xs="6">
              <Input style={{ marginBottom: "10px" }} placeholder="full name:" />
            </Col>
            <Col xs="6">
              <Input style={{ marginBottom: "10px" }} placeholder="phone number:" />
            </Col>
            <Col xs="12">
              <Input style={{ marginBottom: "10px" }} placeholder="address:" />
            </Col>
          </Row>
        );
      }
      return witnessesArray;
    };

  return (<div style={{marginTop:"30px"}}>
    <h3 style={{marginBottom:"20px"}}>
          <Badge>3</Badge> Witnesses
    </h3>
  <Form onSubmit={handleSubmit}>
    {renderWitnesses()}
    <ButtonGroup>
    <Button color="primary" onClick={addNewWitness}>Add Witness</Button>
         <Button color="primary" type="submit">Submit</Button>
    </ButtonGroup>
   
  </Form>
  Witnesses: {witnessesArray.join(", ")}
</div>)
}

export default Form3;
