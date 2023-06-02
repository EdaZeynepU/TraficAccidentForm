// import { useFormik } from "formik";
import {useState} from "react";
import { Form, Input, Button,Badge, ButtonGroup } from "reactstrap";
// Label,Badge, FormGroup,


function Form3() {
    const [witnesses, setWitnesses] = useState(1);
    const [witnessesArray, setWitnessesArray] = useState([]); //stores witnesses values

    const addNewWitness = () => {
      setWitnesses(witnesses + 1);
    };
  
    const handleSubmit = (e) => {
        const updatedWitnessesArray = [];
        for (let i = 0; i < e.target.children.length - 1; i++) {
          updatedWitnessesArray.push(e.target.children[i].value);
        }
        setWitnessesArray(updatedWitnessesArray);
        e.preventDefault();
      };
    
    const renderWitnesses = () => {
      const witnessesArray = [];
      for (let i = 0; i < witnesses; i++) {
        witnessesArray.push(<Input key={i} placeholder="full name, adress, phone number"/>);
      }
      return witnessesArray;
    };

  return (<div style={{marginTop:"30px"}}>
    <h3>
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
